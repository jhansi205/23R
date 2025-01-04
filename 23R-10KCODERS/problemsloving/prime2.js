function isprime(n){
   
    let sumprime=0
    let sumnonprime=0
    for(i=1;i<=n;i++){
        count=0
        if(i>1){
           for(j=2;j<i;j++){
            if(i%j==0){
                count++
            }
           }
           if(count==0){
              sumprime+=i
              
              
           }else{
            sumnonprime+=i
           }
        }else{
            sumnonprime+=i
        }
    }
  return {sumprime,sumnonprime};
   
}
console.log(isprime(20));
