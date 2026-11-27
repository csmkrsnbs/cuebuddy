'use strict';
const base=require('./compact-studio.cjs');
const assert=require('node:assert/strict');
const css=base.css+"\n/* V6.4.3 Minimal Showcase — single navigation entry per workspace on desktop. */\n@media screen and (min-width:1200px){\nbody.pure-studio.cb-compact[data-cb-view=\"home\"]:not(.session-active):not(.reader-mode):not(.review-ready)>main{max-width:1240px!important;padding-inline:clamp(16px,2.5vw,32px)!important}\nbody.pure-studio.cb-compact[data-cb-view=\"home\"]:not(.session-active):not(.reader-mode):not(.review-ready) .pure-home{grid-template-columns:minmax(0,1.65fr) minmax(290px,1fr);grid-template-areas:\"session prep\" \"modules modules\" \"more more\";gap:10px!important}\n.pure-home .pure-modules>.pure-module{justify-items:center;text-align:center}\n.pure-home .pure-session{min-width:0}\n}\n";
function transform(p,h){
 let out=base.transform(p,h);
 if(!out.includes('pure-studio.css?v=642'))return out;
 out=out.replace('pure-studio.css?v=642','pure-studio.css?v=643');
 if(p!=='index.html'&&p!=='teleprompter.html')return out;
 const before=out;
 const start=out.indexOf('<nav class="adaptive-sidebar"'),end=out.indexOf('</nav>',start);
 assert(start>=0&&end>start,'Missing desktop navigation boundary');
 out=out.slice(0,start)+out.slice(end+6);
 out=out.replaceAll('V6.4.2 · Compact Studio','V6.4.3 · Minimal Studio').replace('V6.4.2 · COMPACT STUDIO','V6.4.3 · MINIMAL STUDIO');
 assert(out.slice(out.indexOf('<div class="compact-workbar">'))===before.slice(before.indexOf('<div class="compact-workbar">')),'Active workspace changed');
 return out;
}
module.exports={transform,css,js:base.js};
if(require.main===module){const fs=require('node:fs'),path=require('node:path'),root=path.resolve(process.argv[2]||'.');for(const p of ['index.html','teleprompter.html','cv.html','practice.html','reader.html','legal.html']){const f=path.join(root,p);fs.writeFileSync(f,transform(p,fs.readFileSync(f,'utf8')))}fs.writeFileSync(path.join(root,'pure-studio.css'),css);fs.writeFileSync(path.join(root,'precision-ui.js'),base.js);console.log('V6.4.3 Minimal Studio applied');}
