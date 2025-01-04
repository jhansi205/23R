let n=500
for(i=2;i<=n;i++){
    isprime=true
    if(i>1){
        for(j=2;j<i;j++){
            if(i%j==0){
                isprime=false
                break
            }
        }
        if(isprime){
            console.log(`${i} is prime`)
        }
        else{
        console.log(`${i} is not prime`)
    }
    }else{
        console.log(`${i} is not prime`)
    }
}