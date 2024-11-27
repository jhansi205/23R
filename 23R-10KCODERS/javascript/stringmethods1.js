// let str="abc"
// let char="g";
//includes()
// function inc(s,c){
//     exists=false
//  for(i of str){
    
//     if(i==c){
//       exists=true
//     }
//  }
//  if(exists){
//     return true
//  }else{
//     return false
//  }
// }

// console.log(inc(str,char));


//trim start
// let str="    hello world    ";
// let res=""
// let count=0
// for(i of str){
//    if(i==" "&&count==0){

//    }else{
//       res+=i;
//       count++
//    }
// }
// console.log(res);


//trim end
let str="   hello world    ";
let res=""
let count=0

for (let i = str.length - 1; i >= 0; i--) {
   if (str[i] == " "&&count==0) {
   //  res+=str[i]
   }else{
      res+=str[i]
      count++
   }
 }

let final=""
for(i=res.length-1;i>=0;i--){
  final+=res[i]
}
console.log(final);


// console.log(res.split("").reverse().join(""));//using methods



//slice
// let str="helloworld";
// let start=1
// //let end=5;
// let res=""

//  const sli_ce=(str,start,end)=>{
//    if(end!==undefined){
//     for(i=start;i<end;i++){
//       res+=str[i]
//     }
//    }else{
//       for(i=start;i<str.length;i++){
//          res+=str[i]
//        }
//    }
//    return res
//  }
// console.log(sli_ce(str,start));


//indexof
// let str="javascript";
// let char="p";
// for(i in str){
//    if(str[i]==char){
//       console.log(i);
      
//    }
// }


// let str="javascriptap";
// let char="a";
// let last_index=0
// let count=0;
// for(i in str){
//    if(str[i]==char){
//       last_index=i
//       count++
//    }
// }
// console.log(last_index,count);
