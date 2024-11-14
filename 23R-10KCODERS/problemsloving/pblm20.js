function data(num){
   if(typeof(num)==='number'){
    return "Integer";
   }else if(typeof(num)==="string"){
    return "String";
   }
}
console.log(data(500));
console.log(data("Coding"));