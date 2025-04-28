var http=require("http")

var server=http.createServer(async(req,res)=>{
    var url=require("url")
    console.log(req.url);
    var parsedurl=url.parse(req.url,true)
    console.log(parsedurl.query);
    
    var data=await fetch("https://fakestoreapi.com/products")
    var data1=await data.json();
    if(parsedurl.query.order=="asc"){
      data1.sort((a,b)=>{
        return a.price-b.price
    })
     res.write(JSON.stringify(data1))
     res.end()
    }else if(parsedurl.query.order=="desc"){
      data1.sort((a,b)=>{
        return b.price-a.price
    })
    res.write(JSON.stringify(data1))
    res.end()
    }else{
      res.write(JSON.stringify(data1))
      res.end()
    }
    
    // console.log(data1);
    
     res.write(JSON.stringify(parsedurl.query))
     res.end()
})
var port=3000
server.listen(port,()=>{
  console.log("hi server has been started");
  
})