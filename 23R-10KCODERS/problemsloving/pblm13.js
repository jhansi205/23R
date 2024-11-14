debugger
let x=(arr)=>{
    for(i=0;i<arr.length;i++){
        for(j=arr.length-1;j>i;j--){
            if(arr[i]>arr[j]){
                temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
    return arr;
}
let sorted_array=(x([10, 40, 30, 20, 50]));

console.log(sorted_array[sorted_array.length-2]);


