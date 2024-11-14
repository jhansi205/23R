function isPrime(input) {
var count=0
if(input<=1){
  console.log("Not prime number");
  return;
  
}
for(i=2;i<=Math.sqrt(input);i++){
    if(input%i===0){
      console.log(`${input} is not a prime number`);
      return;
    }
}
console.log(`${input} is a prime number`);
} 
isPrime(39);
isPrime(63);
isPrime(71);
isPrime(2);
isPrime(97);
isPrime(33)