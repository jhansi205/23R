const express=require("express")
const jwt=require("jsonwebtoken")
const bcrypt = require("bcrypt");
const app=express()
const connection=require("./db.js")
app.use(express.json())
let secret_key="abcdefghijklmnopqrstuvwxyz0123456789"
//home route
app.get("/",(req,res)=>{
   res.send("hello")
})
//login route with secure authentication
app.post("/login",(req,res)=>{
    const{username,password}=req.body
    let qry=`select * from students where name=? and password=?`
    connection.query(qry,[username,password],(err,result)=>{
        if(err){
            return res.status(500).json({ error: "Database error", details: err });
        }else{
            if(result.length>0){
              let token=jwt.sign({name:username,password:password},secret_key,{expiresIn:"1hr"})
             res.send(token)
            }else{
                res.send("invalid credentials")
            }
        }
    })
})
app.listen(3000,(err)=>{
    err?console.log(err):console.log("server started")
})