let ip= [5,3,5,2,1,1,7,3,5,6]
let arr=[]
let count=0
for(i=0;i<ip.length;i++){
    let flag=false
    for(j=0;j<arr.length;j++){
        if(ip[i]===arr[j]){
            flag=true
            break
        }
    }
    if(!flag){
        arr.push(ip[i])
    }
}
//descending order
let temp;
for(i=0;i<arr.length;i++){
    for(j=i+1;j<arr.length;j++){
        if(arr[i]<arr[j]){
            temp=arr[i];
            arr[i]=arr[j]
            arr[j]=temp
        }
    }
    
}
console.log(arr);
