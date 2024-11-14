var num=25;
var count=0
if(num%2==0){
    while(true){
        num++
        fact=0
        for(i=2;i<num;i++){
            if(num%i==0){
                fact++
                break
            }
        }
        if(fact==0){
             count++
             if(count==6){
               console.log(`${num} is prime number`)
               break
             }
             
        }
       
    }
}
else{
  while(true){
        num--
        fact=0
        for(i=2;i<num;i++){
            if(num%i==0){
                fact++
                break
            }
        }
        if(fact==0){
             count++
             if(count==6){
               console.log(`${num} is prime number`)
               break
             }
             
        }
       
    }
}