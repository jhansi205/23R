
let ip1 = [1, 6, 3, 1, 5, 9, 7, 2, 1, 9, 3, 7, 8, 9, 10];
let nofind=7
let arr = []; // Array to keep track of arr numbers
for(i=0;i<ip1.length;i++){
    let flag=false
    let count=0
    if(ip1[i]===nofind){
        continue
    }
    for(j=0;j<arr.length;j++){
        if(ip1[i]===arr[j]){
            flag=true
            break;
        }
    }
    if(!flag){
        for(k=0;k<ip1.length;k++){
            if(ip1[i]===ip1[k]){
                count++
            }
        }
        console.log(`${ip1[i]} present ${count} times`);
        arr.push(ip1[i])
    }
    
}