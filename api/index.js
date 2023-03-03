import express from "express";

const app=express();

app.use((req,res,next)=>{
    if(req.url=="/aliya"){
        console.log("aliya");
    }
    console.log(req.url);
    next();
});

//route
app.get("/api/salam",(req,res)=>{
    res.send("assalamua'laikum");
});

app.listen(3000,()=>{
    console.log("server sedang berjalan");
});

