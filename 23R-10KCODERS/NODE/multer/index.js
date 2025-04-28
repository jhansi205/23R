const express=require("express")
const multer=require("multer")
const app=express()
const path=require("path")
const fs=require("fs")
app.use(express.json())
const folder_path=path.join(__dirname+"/uploads")

const exists=fs.existsSync(folder_path)

if(!exists){
    fs.mkdirSync(folder_path,{recursive:true})
}
const storage=multer.diskStorage({
    destination:function(re,file,cb){
        cb(null,"./uploads")
    },
    filename: function (req, file, cb) {
        cb(null,file.originalname); 
    }
})

const upload=multer({storage:storage})//middleware
app.post("/uploads",upload.single("file"),(req,res)=>{
  res.send("file uploaded successfully")
   
})
app.listen(3000,(err,info)=>{
   err?console.log(err):console.log("server started");
   
})