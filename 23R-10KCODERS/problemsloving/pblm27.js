let num1=15
let num2=50
debugger
let max=num1>num2?num1:num2
while(true){
if(max%num1==0&&max%num2==0){
    console.log(`The LCM of ${num1} and ${num2} is ${max}`);
    break;
}
max++
}