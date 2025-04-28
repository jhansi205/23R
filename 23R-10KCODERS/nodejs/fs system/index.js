const { log } = require('console')
var fs=require('fs')

// fs.readFile("./index.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log(err);
        
//     }else{
//         console.log(data);
        
//     }
// })

// var y=fs.readFileSync('./index.txt',"utf-8")
// console.log(y);
// console.log("iam lost");
// var obj={name:"lucky",age:25}

// fs.writeFile("lucky.txt",JSON.stringify(obj),(err)=>{
//     console.log(err);
    
// })




// var obj={
//     name:"mahi",
//     role:"developer",
//     age:25,
//     salary:30000
// }
// fs.writeFile("mahi.txt",JSON.stringify(obj),"utf-8",(err)=>{
//     if(err){
//         console.log(err);
        
//     }else{
//         console.log("file has been created");
        
//     }
    
// })
// var obj={
//     name:"mahi",
//     role:"developer",
//     age:25,
//     salary:30000
// }
// fs.writeFile("lucky.txt",JSON.stringify(obj),"utf-8",(err)=>{
//     console.log(err);
    
// })


// fs.writeFile("song.txt","i like listening songs","utf-8",(err)=>{
//     console.log(err);
    
// })
//   var arr=["apple","bag","sasi"]
// fs.writeFile("arr.txt",JSON.stringify(arr),"utf-8",(err)=>{
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("File written successfully!");
//     }
    
// })


// fs.appendFile("./arr1.txt","\nthis is array","utf-8",(err)=>{
//     if(err){
//         console.log(err);
        
//     }else{
//         console.log("file has appended");
        
//     }
// })

//delete file
// fs.unlink("arr1.txt",(err)=>{
//     if(err){
//         console.log(err);
        
//     }else{
//         console.log("delete file");
        
//     }
// })

//create multiplefiles



// const obj = {
//   name: "priya",
//   role: "developer",
//   sal: 20000,
// };

// const files = ["file1.txt", "file2.txt", "file3.txt"];

// let completed = 0;

// files.forEach((filename) => {
//   fs.writeFile(filename, JSON.stringify(obj), "utf-8", (err) => {
//     if (err) {
//       console.log(`Error writing to ${filename}:`, err);
//     } else {
//       console.log(`${filename} created successfully`);
//     }

//     // Check if all files are done
//     completed++;
//     if (completed === files.length) {
//       console.log("All files have been created successfully!");
//     }
//   });
// });

// const files = ["file1.txt", "file2.txt", "file3.txt"];
// let completed = 0;

// files.forEach((filename) => {
//   fs.unlink(filename, (err) => {
//     if (err) {
//       console.log(`Error writing to ${filename}:`, err);
//     } else {
//       console.log(`${filename} created successfully`);
//     }

//     // Check if all files are done
//     completed++;
//     if (completed === files.length) {
//       console.log("All files have been deleted successfully!");
//     }
//   });
// });



//create folder

// fs.mkdir("ram/raju",(err)=>{
//   console.log(err);
  
// })

// fs.mkdir("hell/yama/soldiers/sinner",{recursive:true},(err)=>{
//   console.log(err);
  
// })


// fs.rename("hell","heaven",(err)=>{
//   console.log(err);
  
// })

// fs.rename("heaven/yama","heaven/indra",(err)=>{
//   console.log(err);
  
// })

// fs.rename("heaven/indra/angels/sinner","heaven/indra/angels/holyperson",(err)=>{
//   console.log(err);
  
// })
// fs.mkdir("rama",(err)=>{
//   console.log(err);
  
// })

//delete file many dir 
// fs.rm("rama",(err)=>{
//   console.log(err);
  
// })
//single folder using rmdir
// fs.rmdir("rama",(err)=>{
//   console.log(err);
  
// })

// fs.rm("ram",{recursive:true},(err)=>{
//   console.log(err);
  
// })
 
// fs.mkdir("raju/suma",(err)=>{
//   console.log(err);
  
// })
// fs.readdir("raju/suma",(err,files)=>{
//   if(err){
//     console.log(err);
    
//   }else{
//     console.log(files);
    
//   }
// })


// fs.stat("raju",(err,files)=>{
//   if(err){
//     console.log(err);
//   }else{
//     console.log(files);
//   }
  
// })


