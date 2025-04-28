const express=require("express")
const server=express()
const data=require("./data.js")


server.use(express.json())
server.get("/",(req,res)=>{
    console.log(req.body);
    
    res.send("server started")
})
server.post("/",(req,res)=>{
   let body=req.body
  if(body.username==="jhansi" && body.password==="lucky"){
    res.send("login success")
  }else{
    res.send("invalid credentials")
  }
})
server.get("/:id",(req,res)=>{
   let pro_id=req.params.id
   console.log(pro_id);
   
   let product=data.data.filter((val,ele,index)=>{
      return val.id==pro_id
      
   })
   if(product.length>0){
    res.send(product)
}else{
    res.send("product not found")
} 
})
server.patch("/:id",(req,res)=>{
    let pro_id=req.params.id
    let user_price=req.body.price
    let exists=false
    let updated=false
    data.data.forEach(element=>{
         if(element.id==pro_id){
            exists=true
            element.price=user_price
            console.log(element);
            updated=true
            // res.send(element)
         }
    })
    if(exists){
        res.send("record updated")
    }else{
        res.send("product not found")
    }
  
})

server.listen(3001,()=>{
  console.log("server is running");
  
})