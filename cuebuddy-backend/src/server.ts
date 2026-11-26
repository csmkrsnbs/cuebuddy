import express from "express";
const app=express();
app.disable("x-powered-by");
app.use((_req,res)=>{res.setHeader("Cache-Control","no-store");res.setHeader("X-Content-Type-Options","nosniff");res.status(410).json({ok:false,error:"Legacy CueBuddy API retired",replacement:"https://cuebuddy-voice-preview.vercel.app/"});});
const port=Number(process.env.PORT??3001);
app.listen(port,()=>console.log("Legacy CueBuddy API retired; no AI providers initialized."));
