var fs=require("fs")//ioperations
console.log(10)//synchrnous

setTimeout(()=>{
   console.log("hello");//asynchronous
   
},0)

setImmediate(()=>{
    console.log("set");
    
})

fs.readFile("index.txt","utf-8",(err,data)=>{
    console.log(data);
    
})
