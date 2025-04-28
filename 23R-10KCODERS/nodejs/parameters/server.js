var http=require('http')
var server=http.createServer((req,res)=>{
//    console.log(req);
if(req.method==="POST"){
    let body=''
   req.on("data",(chunk)=>{
    body+=chunk.toString();
    res.write(`<h1>hello world</h1>`)
    res.end()
   })
  req.on("end",()=>{
    console.log("finished reading");
    
  }) 
}
if(req.method==="GET"){
    res.write(`<h1>Hello world</h1>`)
    res.write(`<html><body><p>response server</p></body></html>`)
    res.end()
}
})
server.listen(3002,()=>{
    console.log("server has been started");
    
})