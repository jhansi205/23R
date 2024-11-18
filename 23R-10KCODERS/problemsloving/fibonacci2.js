let a=5;
let b=a+1;
let count=0
// for(i=0;i<35;i++){
//     count++
//     if(count==35){
//         console.log(a);
        
//     }
//     c=a+b
//     a=b
//     b=c
//}

while(true){
    count++
    if(count==35){
        console.log(a);
        break
    }
    c=a+b
    a=b
    b=c
}