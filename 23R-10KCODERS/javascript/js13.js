// function evenOrOdd(num){
//   if(num%2==0){
//     return "Even"
    
//   }else{
//     return "Odd"
    
//   }
// }
// console.log(evenOrOdd(30));
// console.log(evenOrOdd(3210));
// console.log(evenOrOdd(30235));
// console.log(evenOrOdd(302));
// console.log(evenOrOdd(3045));
// console.log(evenOrOdd(301));


//Palindrome
// function isPalindrome(str){
//     var str2='';
//     for(i=str.length-1;i>=0;i--){
       
//         str2 +=str[i]
       
//     }
    
//     if(str!==str2){
        
//         console.log("Not palindrome");
        
//     }else{
//         console.log("Palindrome");
        
//     }
// }

// isPalindrome("mom")
// isPalindrome("dad")
// isPalindrome("abba")
// isPalindrome("css")
// isPalindrome("abbababa")


//largest three numbers

function largestNumber(a,b,c){
    var big=(a>b && a>c)?a:(b > c ? b : c)
   return big
}
console.log(largestNumber(2,7,10));
console.log(largestNumber(20,7,80));
console.log(largestNumber(200,7,130));
console.log(largestNumber(22,71,110));
console.log(largestNumber(23,73,120));
