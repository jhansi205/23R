const mail=require("nodemailer")
const express=require("express")

const app=express()
app.use(express.json())





const transport=mail.createTransport({
    host:"smtp.gmail.com",
    secure:false,
    port:587,
    auth:{
        user:"jhansilakshmibhainandigam@gmail.com",
       pass:"rnss fvwc kjyo kvcb"
    }
})
app.post("/sendotp",(req,res)=>{
    var receiver=req.body.mail
    var content=req.body.data
})
app.get("/getotp",(req,res)=>{
    var otp=""
    for(i=0;i<4;i++){
        let num=Math.floor(Math.random()*10)
        otp+=num
        
    }
    console.log(otp);
    let mailoptions={
        from:"jhansilakshmibhainandigam@gmail.com",
        to:receiver,
        subject:content,
        text:`verfied otp is ${otp}`
    }
    transport.sendMail(mailoptions,(err,data)=>{
        err?res.send(err):res.send(data)
    })
    
   
})



app.listen(3001,(err,res)=>{
    err?console.log(err):console.log("server has been started");
    
})