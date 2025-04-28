var express=require("express")
var app=express();
app.put("/",(req,res)=>{
    res.send({
        msg:req.query
    })
})
app.listen(3000,()=>{
    console.log("hi server started");
    
})