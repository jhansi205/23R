var result=0
let x=function(num,length){
    let arr=[]
    for(i=1;i<=length;i++){
       result=num*i;
     arr.push(result)
       
    }
    return arr
}
console.log(x(7,5));
console.log(x(12,10));
console.log(x(17,6));


