// const dup_arr=(arr)=>{
//     debugger
//     let res=[]
//     for(i of arr){
//         if(res.indexOf(i)===-1){
//             res.push(i)
//         }
//     }
//    return res
// }
// console.log(dup_arr([1,0,1,0]));
// console.log(dup_arr(["The", "big", "cat"]));


//method2

// let arr=[1,0,1,0]
let arr=["The", "big", "cat"]
let emp=[]
for(i in arr){
    if(!emp.includes(arr[i])){
        emp.push(arr[i])
    }
}
console.log(emp);
