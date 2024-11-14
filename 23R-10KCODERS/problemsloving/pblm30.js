var str="i am ram";
var count=0
var count1=0
for(i in str){
   var str1=str[i]
   if(str1==="a"||str1==="e"||str1==="i"||str1==="o"||str1==="u"){
    count++
   }
   else if (str1 >= 'a' && str1 <= 'z'){
        count1++
    }
}
console.log(`${count++} vowels ${count1++} consonants`);

