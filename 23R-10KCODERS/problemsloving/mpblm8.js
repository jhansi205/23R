// let str='Hii i am rama';
// let a = '';
// let b = '';
// let c =''
// let x = 0;
// let y=0
// let z=0
// for(i=0;i<str.length;i++){
//     let count=0
//     let char=str[i]
//     if(char===' '){
//         continue;
//     }
//     for(j=0;j<str.length;j++){
//         if(str[j]===char){
//             count++
//         }
//     }
//     if (count > x) {
//         c=b
//         z=y
//         b=a
//         y=x
//         a=char
//         x=count
      
//     } else if (count > y && char !== a ) {
//         c=b;
//         z=y; 
//         b = char;
//         y = count;
//     }else if(count>z && char!==a&&char!==b){
//        c=char
//        z=count
//     }
// }
// console.log(`${a}, ${b},${c}`);//three most characters
let str='Hii i am rama';
let a = '';
let b = '';
let c =''
let x = 0;
let y=0
let z=0
for(i=0;i<str.length;i++){
    let count=0
    let char=str[i]
    if(char===' '){
        continue;
    }
    for(j=0;j<str.length;j++){
        if(str[j]===char){
            count++
        }
    }
    if (count > x) {
        b=a
        y=x
        a=char
        x=count
      
    } else if (count > y && char !== a ) { 
        b = char;
        y = count;
    }
}
console.log(`${a}, ${b}`);