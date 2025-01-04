let row=4
let code=97
for(i=1;i<=row;i++){
    let s=""
    for(j=1;j<=i;j++){
        s+=String.fromCharCode(code)+" "
        code++
    }
    console.log(s)
}

//pattern

// let row=4
// let code=97
// for(i=0;i<row;i++){
//     let s=""
//     for(j=0;j<=i;j++){
//         s+=String.fromCharCode(code+i)+" "
//     }
//     console.log(s)
// }
