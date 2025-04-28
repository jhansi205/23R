var http=require("http")
 var server=http.createServer((req,res)=>{
    res.end("jhansi")
 })
 var port=3200
  server.listen(port,()=>{
    console.log("server is running"+" "+"http://localhost:"+port);
    
  })