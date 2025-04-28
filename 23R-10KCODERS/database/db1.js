const mysql=require("mysql2")
const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"12345",
    database:"23r"
})
connection.connect((err)=>{
    err?console.log(err):console.log("database connected")
})
module.exports=connection