let arr1=[1, 2, 2, 1, 3, 5, 1];
let arr2=[]
let sum=0
for(i=0;i<arr1.length;i++){
    let flag=false
    for(j=0;j<arr2.length;j++){
        if(arr1[i]==arr2[j]){
            flag=true
            break
        }
    }
    if(!flag){
        arr2.push(arr1[i]) 
        sum+=arr2[j]
    }

}
console.log(sum);

