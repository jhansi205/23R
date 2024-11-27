let arr=[1,2,3,4,5,7,8,9,10];
// for(i=0;i<arr.length;i++){
//    if(i==5){
//     arr.splice(5,0,6);
//     break
//    }
// }
// console.log(arr);

//method2
let newValue=6
let index=5
debugger
for(i=arr.length;i>index;i--){
    arr[i]=arr[i-1]
   
    
}
arr[index]=newValue
console.log(arr);