var x=(str)=>{
 for(let i=0;i<str.length;i++){
    var maxLength=0
    if(str[i].length>maxLength){
        maxLength=str[i]
    }
 }
 return maxLength;
}
console.log(x(['nik', 'mikhil', 'Cow','Elephant'] ));
