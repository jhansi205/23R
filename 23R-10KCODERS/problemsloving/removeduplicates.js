let str="javascript is programming language";
let emp=""
// for(i of str){
//   if(!emp.includes(i)&&i!==" "){
//     emp+=i
//   }
// }
// console.log(emp)
for(i of str){
  let flag=false
  for(j of emp){
    if(j==i){
     flag=true
     break
    }
  }
  if(!flag&&i!==" "){
    emp+=i
  }
}
console.log(emp)