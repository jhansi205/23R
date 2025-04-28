//http or https
const http=require("http")
const server=http.createServer((req,res)=>{
    console.log(req.method);
    // res.write("request received")
    // res.write("hello user")
    // res.end()

    if(req.method==="GET"){
         res.write("get method called")
    res.write("hello user")
    res.end()

    }
    if(req.method==="POST"){
        res.write("post method")
        res.end()
    }
})
var port=3100
server.listen(port,()=>{
  console.log("server is active and running");
  
})