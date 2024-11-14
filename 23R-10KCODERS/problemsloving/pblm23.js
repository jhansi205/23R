var x=function(arr){
   var temp;
  for(i=0;i<arr.length;i++){
    for(j=arr.length-1;j>i;j--){
       if(arr[i]>arr[j]){
        temp=arr[i]
        arr[i]=arr[j]
        arr[j]=temp;
       }
    }
     
  }
  return arr;
}
console.log(x([2,3,1,5,4]));
