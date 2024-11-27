const str=(char,str1)=>{
    let count=0
   for(i of str1){
    if(i===char){
        count++
    }
   }
   return count
}
console.log(str("c","Chamber of secrets"));
