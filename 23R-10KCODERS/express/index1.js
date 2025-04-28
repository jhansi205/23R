var express=require('express')
var app=express()
const port=3000
app.get("/",(req,res)=>{
  res.send("helli from server")
})

app.listen(port,(req,res)=>{
    console.log("server will be started");
    
})