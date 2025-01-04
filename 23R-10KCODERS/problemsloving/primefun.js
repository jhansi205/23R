function isPrime(n){
    count=0
    for(i=2;i<n;i++){
       
        if(n%i==0){
           count++
           
        }
    }
    if(count===0){
        return "prime"
    }else{
        return "not prime"
    }
}
console.log(isPrime(11));
console.log(isPrime(15));
console.log(isPrime(21));
console.log(isPrime(5));