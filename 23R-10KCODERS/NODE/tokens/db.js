const mysql=require("mysql2")
const dotenv = require("dotenv");
require("dotenv").config()
// console.log(require("dotenv").config())
const connection=mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE//masked my values
})
connection.connect((err,info)=>{
    err?console.log(err):console.log("database connected")
})
module.exports = connection;