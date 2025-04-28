var http=require('http')

var url=require("url")
 
var server=http.createServer((req,res)=>{
   console.log(req.url);
   var parsedurl=url.parse(req.url,true)
//    var route=parsedurl.pathname.split("/")
//    console.log(route.length-1);
   
//    console.log(route[route.length-1]);
   
//    res.write(parsedurl.pathname)
//    res.write(JSON.stringify(parsedurl))
if(parsedurl.pathname=="/home"){
    res.write("hi this is home")
    res.end()
}else if(parsedurl.pathname=="/fake"){
    res.write("hi this is fake")
    res.end()
}else{
    res.write("provide fake/home as path")
    res.end()
}
   
})
var port=3000
server.listen(port,()=>{
    console.log("hi server has been started");
    
})