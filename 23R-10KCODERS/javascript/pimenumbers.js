var flag=0
for(i=2;i<=300;i++)
   
{   let count = 0;
    for(j=1;j<=i;j++){
    if(i%j==0){
        count++
    }
}
if(count==2){
    console.log(`${i} is prime`);
    flag++
    
}

}
console.log(flag);
