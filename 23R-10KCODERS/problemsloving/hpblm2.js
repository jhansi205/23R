
let x=((str)=>{
    let op=[]
    for(i=0;i<str.length;i++){
        for(j=0;j<str[i].length;j++){
            if(str[i][j]>='0'&&str[i][j]<='9'){
                op.push(str[i])
                break
            }
        }
      
    
    }
    return op
})
console.log(x(["1a", "a", "2b", "b"]));
console.log(x(["abc", "abc10"]));
console.log(x(["abc", "ab10c", "a10bc", "bcd"]));
console.log(x(["this is a test", "test1"]));



