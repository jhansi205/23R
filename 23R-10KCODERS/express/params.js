var express=require("express")
var fs=require('fs')
var app=express()
var port=3001
app.get('/reg',(req,res)=>{
   console.log(req.query);
  res.send("hi this is reg")
})
app.get("/",(req,res)=>{
 fs.readFile("index.html","utf-8",(err,data)=>{
    if(err){
res.send({
    msg:err.message,
    status:400
})
    }else{
        res.send(data)
    }
 })
})

app.listen(port,()=>{
    console.log("server started");
    
})