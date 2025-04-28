// const connection=require("./db1.js")

// const express=require("express")
// const server=express()
// server.use(express.json())
// server.get("/",(req,res)=>{
//     let mname=req.body.name
//     let query=`select * from ntrmovies where name='${mname}';`
//     connection.query(query,(err,result)=>{
//         err?res.send(err):res.send(result)
//     })
// })
// server.listen(3000,(err)=>{
//     err?console.log(err):console.log("server is running")
// })


const connection=require("./db1.js")

const express=require("express")
const server=express()
const bcrypt=require("bcrypt")
server.use(express.json())
server.get("/",(req,res)=>{
    let budget=req.body.budget
    let query=`select * from ntrmovies where budget=?`
    connection.query(query,[budget],(err,result)=>{
        err?res.send(err):res.send(result)
    })
})
server.post("/",(req,res)=>{
let sql=`insert into ntrmovies values(?,?,?,?);`
let name=req.body.name
let year=req.body.year
let budget=req.body.budget
let collection=req.body.collection
let hashed_budget=bcrypt.hashSync(budget,14)


 connection.query(sql,[name,year,hashed_budget,collection],(err,result)=>{
    err?res.send(err):res.send("record inserted successfully")
 })
})
server.listen(3000,(err)=>{
    err?console.log(err):console.log("server is running")
})