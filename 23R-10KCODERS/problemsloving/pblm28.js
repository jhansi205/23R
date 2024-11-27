let res=""
for(i=65;i<91;i++){
    let char = String.fromCharCode(i);
    let num=i-64
    res += char + num+" ";
    
}
console.log(res);

