let num1=25;
let num2=75;
max=num1>num2?num1:num2;
min=num1<num2?num1:num2;
console.log(max,min);
gcd=1
for(i=1;i<=min;i++){
    if(num1%i==0&&num2%i==0){
        gcd=i
    }
}
console.log(gcd);

