const express=require("express")
const app=express()//i.e my server
const jwt=require("jsonwebtoken")
app.use(express.json())//middleware
const db=require("./db.js")
let secret_key="i_am jhansi"
// let details={
//     id:1,
//     name:"jhansi",
//     role:"fullstack_developer"
// }

//let token=jwt.sign(details,secret_key)
// console.log(token)
app.get("/getusers",(req,res)=>{
//    let user=jwt.decode(req.headers.authorization.split(" ")[1]);
// let user=jwt.decode("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30");
// console.log(user);
let user=jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImpoYW5zaSIsInJvbGUiOiJmdWxsc3RhY2tfZGV2ZWxvcGVyIiwiaWF0IjoxNzQwNTY5Mzg2fQ.KuiTI6vkISTt_yJmz_B1Xh2MbcDIUiWMdoPqDRUnrt4",secret_key);
console.log(user);
   if(user.role=="fullstack_developer"){
       let sql=`select * from employee`
       db.query(sql,(err,info)=>{
        err?res.send(err):info.length>0?res.send(info):res.send("no data available")
        ;
        
       })
   }else{
    res.send("you are not authorized")
   }
})
// let user=jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30",secret_key)



app.listen(3000,(err,data)=>{
    err?console.log(err):console.log("server started");
})