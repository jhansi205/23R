var http=require('http')
//http://localhost:3300
var server=http.createServer((req,res)=>{
    res.end("hello")
})
 
var port=3000;
 
server.listen(port,()=>{
    console.log("server running on port"+"http://localhost:"+port );
    
})