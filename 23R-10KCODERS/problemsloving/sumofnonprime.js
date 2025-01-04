let num="3436"
let sumofprime=0
let sumofnonprime=0
for(i=0;i<num.length;i++){
    isPrime=true
    if(num[i]>1){
       for(j=2;j<num[i];j++){
         if(num[i]%j==0){
            isPrime=false
            break
         }
       }
       if(isPrime){
          sumofprime+=Number(num[i])
       }
       else{
        sumofnonprime+=Number(num[i])
     }
    }else{
        sumofnonprime+=Number(num[i])
     }
}

console.log(sumofprime)
console.log(sumofnonprime)