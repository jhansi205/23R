let str="abAbCsJa";
let upperCaseCount=0;
let lowerCaseCount=0;
// for(i in str){
//   let code=str.charCodeAt(i);
//   if(code>=65&&code<=90){//97-122 lowercase letters
//     upperCaseCount++;
//   }else{
//     lowerCaseCount++;
//   }
// }
// console.log(upperCaseCount);
// console.log(lowerCaseCount)

//method2
for(i in str){
    if(str[i]==str[i].toUpperCase()){
        upperCaseCount++
    }else{
        lowerCaseCount++
    }
}
console.log(upperCaseCount);
console.log(lowerCaseCount)