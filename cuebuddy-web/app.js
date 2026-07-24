const DEFAULT_API="https://cuebuddy.onrender.com";
const state={recorder:null,stream:null,audioContext:null,analyser:null,chunks:[],timer:null,listening:false,lastTranscript:"",deferredPrompt:null};
const $=(id)=>document.getElementById(id);
const settings=()=>JSON.parse(localStorage.getItem("cuebuddy.settings")||JSON.stringify({threshold:70,autoSpeak:false,autoLoop:true,apiBase:DEFAULT_API}));
const saveSettingsValue=(value)=>localStorage.setItem("cuebuddy.settings",JSON.stringify(value));
const history=()=>JSON.parse(localStorage.getItem("cuebuddy.history")||"[]");
const saveHistory=(items)=>localStorage.setItem("cuebuddy.history",JSON.stringify(items.slice(0,50)));
function toast(message){$("toast").textContent=message;$("toast").classList.remove("hidden");setTimeout(()=>$("toast").classList.add("hidden"),2600)}
function api(){return settings().apiBase.replace(/\/$/,"")}
async function checkApi(){try{const r=await fetch(api()+"/health");if(!r.ok)throw 0;$("apiBadge").textContent="API çevrimiçi";$("apiBadge").style.color="#8df0b0"}catch{$("apiBadge").textContent="API ulaşılamıyor";$("apiBadge").style.color="#ff9dac"}}
function showView(id){document.querySelectorAll(".view").forEach(v=>v.classList.toggle("active",v.id===id));document.querySelectorAll(".bottom-nav button").forEach(b=>b.classList.toggle("active",b.dataset.view===id));if(id==="historyView")renderHistory();scrollTo({top:0,behavior:"smooth"})}
document.querySelectorAll(".bottom-nav button").forEach(b=>b.onclick=()=>showView(b.dataset.view));
function normalizedSimilarity(a,b){a=a.toLowerCase().replace(/[^\p{L}\p{N} ]/gu,"").trim();b=b.toLowerCase().replace(/[^\p{L}\p{N} ]/gu,"").trim();if(!a||!b)return 0;const aw=new Set(a.split(/\s+/)),bw=new Set(b.split(/\s+/));const common=[...aw].filter(x=>bw.has(x)).length;return common/Math.max(aw.size,bw.size)}
async function analyze(text){
  const clean=text.trim();if(clean.length<4)return;
  $("analyzeBtn").disabled=true;$("listenStatus").textContent="Analiz ediliyor";
  try{
    const r=await fetch(api()+"/analyze",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:clean,language:"tr",mode:"social",recentContext:history().slice(0,3).map(x=>x.text)})});
    const data=await r.json().catch(()=>({}));if(!r.ok)throw new Error(data.error||"Analiz başarısız");
    if(!data.has_reference){toast("Belirgin bir gönderme bulunamadı");$("listenStatus").textContent="Dinliyor";return}
    showResult(data,clean);
  }catch(e){toast(e.message||"Bağlantı hatası");$("listenStatus").textContent="Hata oluştu"}finally{$("analyzeBtn").disabled=false}
}
function showResult(data,text){
  const confidence=Math.round((Number(data.confidence)||0)*100);
  if(confidence<settings().threshold){toast(`Sonuç güven eşiğinin altında: %${confidence}`);return}
  $("typePill").textContent=data.reference_type||"bağlam";$("confidence").textContent=`Güven %${confidence}`;$("source").textContent=data.source||"Bağlam";$("meaning").textContent=data.meaning||"";$("reply").textContent=data.suggested_reply||"";$("resultCard").classList.remove("hidden");$("listenStatus").textContent="İpucu hazır";$("listenSub").textContent=data.short_audio_hint||data.meaning||"";
  const item={id:Date.now(),createdAt:new Date().toISOString(),text,...data,confidence};saveHistory([item,...history()]);if(settings().autoSpeak)speak(data.short_audio_hint||data.meaning)
}
function speak(text){if(!("speechSynthesis"in window)||!text)return;speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang="tr-TR";u.rate=1.05;speechSynthesis.speak(u)}
$("speakBtn").onclick=()=>speak($("listenSub").textContent);
$("copyBtn").onclick=async()=>{await navigator.clipboard.writeText($("reply").textContent);toast("Cevap kopyalandı")};
$("analyzeBtn").onclick=()=>analyze($("manualText").value);
function rms(){if(!state.analyser)return 0;const data=new Uint8Array(state.analyser.fftSize);state.analyser.getByteTimeDomainData(data);let sum=0;for(const v of data){const n=(v-128)/128;sum+=n*n}return Math.sqrt(sum/data.length)}
async function startListening(){
  if(!localStorage.getItem("cuebuddy.noticeSeen")){$("noticeModal").classList.remove("hidden");return}
  try{
    state.stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:true,noiseSuppression:true,autoGainControl:true}});
    state.audioContext=new AudioContext();const source=state.audioContext.createMediaStreamSource(state.stream);state.analyser=state.audioContext.createAnalyser();state.analyser.fftSize=2048;source.connect(state.analyser);
    state.listening=true;$("listenBtn").classList.add("hidden");$("stopBtn").classList.remove("hidden");$("pulse").classList.add("live");$("wave").classList.add("live");$("listenStatus").textContent="Dinliyor";$("listenSub").textContent="Sessizlik algısı açık. 5 saniyelik parçalar işleniyor.";
    await startChunk();
  }catch(e){toast(e.name==="NotAllowedError"?"Mikrofon izni verilmedi":"Mikrofon başlatılamadı")}
}
async function startChunk(){
  if(!state.listening)return;
  const mime=["audio/webm;codecs=opus","audio/webm","audio/mp4"].find(x=>MediaRecorder.isTypeSupported(x))||"";
  state.chunks=[];state.recorder=new MediaRecorder(state.stream,mime?{mimeType:mime}:undefined);
  state.recorder.ondataavailable=e=>{if(e.data.size)state.chunks.push(e.data)};
  state.recorder.onstop=async()=>{const level=rms();const blob=new Blob(state.chunks,{type:state.recorder.mimeType||"audio/webm"});if(level>0.012&&blob.size>1200)await transcribe(blob);if(state.listening&&settings().autoLoop)setTimeout(startChunk,250)};
  state.recorder.start();state.timer=setTimeout(()=>{if(state.recorder?.state==="recording")state.recorder.stop()},5000);
}
async function transcribe(blob){
  $("listenStatus").textContent="Yazıya çevriliyor";
  const fd=new FormData();fd.append("audio",blob,blob.type.includes("mp4")?"chunk.m4a":"chunk.webm");
  try{
    const r=await fetch(api()+"/transcribe",{method:"POST",body:fd});const data=await r.json().catch(()=>({}));if(!r.ok)throw new Error(data.error||"Transkripsiyon başarısız");
    const text=(data.text||"").trim();if(text.length<4||normalizedSimilarity(text,state.lastTranscript)>.82)return;state.lastTranscript=text;await analyze(text)
  }catch(e){toast(e.message||"Ses işlenemedi")}
}
function stopListening(){state.listening=false;clearTimeout(state.timer);if(state.recorder?.state==="recording")state.recorder.stop();state.stream?.getTracks().forEach(t=>t.stop());state.audioContext?.close();$("listenBtn").classList.remove("hidden");$("stopBtn").classList.add("hidden");$("pulse").classList.remove("live");$("wave").classList.remove("live");$("listenStatus").textContent="Durduruldu";$("listenSub").textContent="Yeniden başlatmaya hazır."}
$("listenBtn").onclick=startListening;$("stopBtn").onclick=stopListening;
$("noticeOk").onclick=()=>{localStorage.setItem("cuebuddy.noticeSeen","1");$("noticeModal").classList.add("hidden");startListening()};
function renderHistory(){const list=$("historyList"),items=history();if(!items.length){list.innerHTML='<div class="empty">Henüz analiz geçmişi yok.</div>';return}list.innerHTML=items.map(x=>`<article class="history-item"><span class="eyebrow">${new Date(x.createdAt).toLocaleString("tr-TR")} · güven %${x.confidence}</span><h3>${escapeHtml(x.source||x.reference_type||"Bağlam")}</h3><p>${escapeHtml(x.meaning||"")}</p><strong>${escapeHtml(x.suggested_reply||"")}</strong></article>`).join("")}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]))}
$("clearHistory").onclick=()=>{if(confirm("Yerel geçmiş silinsin mi?")){localStorage.removeItem("cuebuddy.history");renderHistory()}};
function loadSettings(){const s=settings();$("threshold").value=s.threshold;$("thresholdOut").value=`${s.threshold}%`;$("autoSpeak").checked=s.autoSpeak;$("autoLoop").checked=s.autoLoop;$("apiBase").value=s.apiBase}
$("threshold").oninput=e=>$("thresholdOut").value=`${e.target.value}%`;
$("saveSettings").onclick=()=>{saveSettingsValue({threshold:Number($("threshold").value),autoSpeak:$("autoSpeak").checked,autoLoop:$("autoLoop").checked,apiBase:$("apiBase").value.trim()||DEFAULT_API});toast("Ayarlar kaydedildi");checkApi()};
window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();state.deferredPrompt=e;$("installBtn").classList.remove("hidden")});
$("installBtn").onclick=async()=>{if(!state.deferredPrompt)return;state.deferredPrompt.prompt();await state.deferredPrompt.userChoice;state.deferredPrompt=null;$("installBtn").classList.add("hidden")};
if("serviceWorker"in navigator)window.addEventListener("load",()=>navigator.serviceWorker.register("/sw.js"));
loadSettings();renderHistory();checkApi();
