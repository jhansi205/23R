// const connection=require("./db.js")
// const express=require("express")
// const app=express()
// app.use(express.json())
// app.get("/getusers",(req,res)=>{
  
// let sql="select * from stu"
// connection.query(sql,(err,result)=>{
//     if(err){
//       res.send("failed to get user")
        
//     }else{
//         res.send(result)
        
//     }
// })
// })
// app.post("/sname",(req,res)=>{
//     let uname=req.body.sname
//     console.log(uname);
    
//     let sql=`select * from stu where sname='${uname}';`;
//     connection.query(sql,(err,result)=>{
//         if(err){
//             res.send('error')
//         }else{
//            if(result.length>0){
//             res.send("email already taken")
//            }else{
//             res.send("email is available")
//            }
//         }
//     })
// })
// app.post("/login",(req,res)=>{
//     let id=req.body.id
//     let sql=`select * from stu where sid='${id}';`
//     connection.query(sql,(err,result)=>{
//         if(err){
//             console.log(err);
            
//         }else{
           
//                 res.send("id is same")
            
//         }
//     })
// })
// app.listen(3000,(err)=>{
//     if(err){
//         console.log(err);
        
//     }else{
//         console.log("server is running");
        
//     }
// })
