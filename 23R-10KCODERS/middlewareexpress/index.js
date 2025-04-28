var express=require('express')
const Middleware=require("./middleware.js")
var app=express()
const port=3000
app.use(express.json())
app.get("/",Middleware.sample_middleware,(req,res)=>{
  // console.log(req);
  
  res.send("hello from server")
})
app.post("/",(req,res)=>{
  console.log(req.body);
  res.send(req.body)
  
})
app.listen(port,(req,res)=>{
    console.log("server will be started");
    
})