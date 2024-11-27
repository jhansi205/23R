let arr=[2,2,2,3,4,4,4];
function findSingleNumber(arr){
   for(i=0;i<arr.length;i++){
    let count=0
      for(j=arr.length-1;j>=0;j--){
        if(arr[i]==arr[j]){
            count++
        }
        
      }
      if(count===1){
    
        return arr[i];
      }
      
   }
   
}
console.log(findSingleNumber([2,2,2,3,4,4,4]));



