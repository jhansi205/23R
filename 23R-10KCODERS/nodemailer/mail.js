const { text } = require("express")
const mail=require("nodemailer")
const transport=mail.createTransport({
    host:"smtp.gmail.com",
    secure:false,
    port:587,
    auth:{
        user:"jhansilakshmibhainandigam@gmail.com",
        pass:"uqiv goey djmw ygcs"
    }
})
let mailoptions={
    from:"jhansilakshmibhainandigam@gmail.com",
    to:"jhansilakshmi252001@gmail.com",
    subject:"testing nodemailer",
    text:"hi, this mail is sent from nodemailer",
    
}
transport.sendMail(mailoptions,(err,info)=>{
    err?console.log(err):console.log(info);
    
    
})