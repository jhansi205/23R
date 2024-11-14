debugger
let x=(arr)=>{
    var temp;
    var new_arr=[]
 for(i=0;i<arr.length;i++){
    var temp=arr[i][0];
    for(j=0;j<arr[i].length;j++){
       if(arr[i][j]>temp){
        temp=arr[i][j]
       }
       
       
       
    }
   new_arr.push(temp)
    
 }
 return new_arr
}

console.log(x(([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]])));
