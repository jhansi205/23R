debugger
let  words = ["mass","as","hero","superhero"]
let arr=[]
for(i=0;i<words.length;i++){
   for(j=0;j<words.length;j++){
      if(i!==j &&words[i].includes(words[j])){
          arr.push(words[j])
      }
   }
}
console.log(arr)