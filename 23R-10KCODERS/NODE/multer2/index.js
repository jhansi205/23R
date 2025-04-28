const express=require("express")//library
const multer = require("multer")
const app=express()//server

app.use(express.json())//middleware
//configuration
 let myStorage=multer.diskStorage({
  destination:(req,file,cb)=>{
     cb(null,"./uploads")
     
     
  },
  filename:(req,file,cb)=>{
    cb(null,Date.now()+file.originalname)
  }
 })
 const upload=multer({storage:myStorage})
app.post("/uploads",upload.single("file"),(req,res)=>{
  if(req.file.mimetype=="image/png"||req.file.mimetype=="image/img"&&req.file.size<=5){
    console.log("validformat");
    
  }else{
    console.log("invalid format");
    
  }

})
app.listen(3000,(err)=>{
  err?console.log(err):console.log("server will be started");

  
})