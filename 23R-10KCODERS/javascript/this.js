// const obj={
//     name:"john",
//     age:30,
//     greet:function(){
//         console.log(this.age);
        
//     }
    
// }
// console.log(this);
// obj.greet()

const obj={
    name:"john",
    age:30,
    greet:()=>{
        console.log(this);
        
    }
    
}

obj.greet()