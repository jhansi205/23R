// var arr=[3,5,10,15,23,22,25,35,56];
// var arr1=[]
// for(i in arr){
//     if(arr[i]%5==0){
//         arr1.push(arr[i])
//     }
// }

// console.log(arr1)

// var arr=["htmL","csS","javaScrIPT","react","angulaR","nodE","EXPREss"];
// var arr1=[];
// for(i in arr){
//     if((arr[i][arr[i].length-1])===(arr[i][arr[i].length-1]).toUpperCase())
//     {
//         arr1.push(arr[i])
        
//     }
// }
// console.log(arr1);

// var arr=["html","css","js","react","angular"]
// var arr1=[]
// for(i in arr){
//     if(i%2==0){
//       arr1.push(arr[i].toUpperCase())
//     }
// }
// console.log(arr1);
// var arr=[22,3,34,21,2,40,302];
// var max=arr[0]
// for(i in arr){
//   if(arr[i]>max){
//     max=arr[i]
//   }
  
// }
// console.log(max)

//min value in array

// var arr=[12,23,45,65,67,68,90,200,400,500,3];
// var min=arr[0]
// for(i in arr){
//     if(arr[i]<min){
//         min=arr[i]
//     }
// }
// console.log(min);

//reverse array
// var arr=[1,2,3,4,5];

// var arr1=[]
// for(i in arr){
//     arr1.unshift(arr[i])
   
// }
// console.log(arr1)
//common elements
var arr1=[1,2,3,4,5,7,8]
var arr2=[4, 5, 6, 7, 8,1]
var arr=[]
for(i in arr1){
    for(j in arr2){
        if(arr1[i]===arr2[j]){
            arr.push(arr1[i])
            
        }
    }
}
console.log(arr)
//move zeros to end
var arr = [0, 1, 0, 3, 12];
var result = [];
for(i in arr){
    if(arr[i]===0){
        result.push(arr[i])
    }
   
}
console.log(result.unshift())
