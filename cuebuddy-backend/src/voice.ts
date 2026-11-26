import { createHash, timingSafeEqual } from "node:crypto";
import type { Express } from "express";
import rateLimit from "express-rate-limit";
const digest=(value:string)=>createHash("sha256").update(value).digest();
const modes:Record<string,string>={engineering:"Answer engineering questions accurately. State assumptions, units, and uncertainty. Never invent measurements or professional experience.",assistant:"Be a helpful general assistant.",training:"Conduct a simulated technical practice interview. Ask one question at a time and give constructive feedback.",translation:"Translate the spoken content into the selected language without commentary."};
const languages:Record<string,string>={tr:"Turkish",en:"English",auto:"the speaker's language"};
export function voiceConfig(mode:string,language:string,voice:string){
return {type:"realtime",model:process.env.OPENAI_REALTIME_MODEL||"gpt-realtime-2.1",output_modalities:["audio"],instructions:"You are CueBuddy, a disclosed AI voice assistant. Do not impersonate a human. "+modes[mode]+" Respond in "+languages[language]+". Keep responses concise and identify uncertainty.",audio:{input:{noise_reduction:{type:"near_field"},transcription:{model:"gpt-4o-mini-transcribe"},turn_detection:{type:"server_vad",threshold:0.5,prefix_padding_ms:300,silence_duration_ms:500,create_response:true,interrupt_response:true}},output:{voice}}};
}
export function installVoice(app:Express){
app.post("/voice/session",rateLimit({windowMs:60000,limit:5,standardHeaders:true,legacyHeaders:false}),async(req,res)=>{
 const key=process.env.OPENAI_API_KEY,expected=process.env.CUEBUDDY_VOICE_ACCESS_CODE,code=req.get("x-cuebuddy-code");
 if(!key||!expected||expected.length<16)return res.status(503).json({error:"Voice Core henüz yapılandırılmadı."});
 if(!code||!timingSafeEqual(digest(code),digest(expected)))return res.status(401).json({error:"Erişim kodu geçersiz."});
 const {sdp,mode,language,voice,consent}=req.body??{};
 if(consent!==true||typeof sdp!=="string"||sdp.length>65536||!sdp.startsWith("v=0")||!["engineering","assistant","training","translation"].includes(mode)||!["tr","en","auto"].includes(language)||!["marin","cedar"].includes(voice)||(mode==="translation"&&language==="auto"))return res.status(400).json({error:"Geçersiz oturum parametreleri."});
 const data=new FormData();data.set("sdp",sdp);data.set("session",JSON.stringify(voiceConfig(mode,language,voice)));
 try{const upstream=await fetch("https://api.openai.com/v1/realtime/calls",{method:"POST",headers:{Authorization:"Bearer "+key},body:data,signal:AbortSignal.timeout(20000)});
 if(!upstream.ok)return res.status(502).json({error:"Ses motoru bağlantısı reddedildi (HTTP "+upstream.status+")."});
 const answer=await upstream.text();if(!answer.startsWith("v=0"))return res.status(502).json({error:"Geçersiz SDP yanıtı."});
 return res.type("application/sdp").send(answer);
 }catch{return res.status(502).json({error:"Ses motoruna ulaşılamadı."});}
});
}
