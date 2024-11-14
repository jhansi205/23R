// var str='HELLO';
// var op=""
// for(i=0;i<=str.length-1;i++){
//     op+=str[i]
//     console.log(op)
// }

//palindrome
// var inputString="world"
// var op=""
// for(i=inputString.length-1;i>=0;i--){
//     op+=inputString[i];

// }
// if(op===inputString){
//     console.log("Palindrome");

// }else{
//     console.log("Not Palindrome");

// }

//day using ternary operator
//  var day="monday"
//  day==="saturday"||day==="sunday"?console.log("Weekend"):console.log("Weekday");

//score
// var score = 50;
// score >= 90
//   ? console.log("Excellent")
//   : score <= 89 && score >= 60
//   ? console.log("Good")
//   : console.log("Need Improvement");

// var numbers=[1,2,3,4,5,6];
// var arr=[];
// for(i=0;i<numbers.length;i++){
//     if(numbers[i]%2==0){
//         console.log("even");
//         arr.push("even")

//     }
//     else{
//         console.log("odd");
//         arr.push("odd")
//     }

// }
// console.log(arr);
// var numbers = [1, 2, 3, 4, 5, 6];
// var arr = [];
// for (i = 0; i < numbers.length; i++) {
//  var result =numbers[i] % 2 === 0 ? "even"
//   :"odd";
//   console.log(result);
//   arr.push(result)

// }
// console.log(arr);

//fizzbuzz
// var number = [5, 25, 15, 20, 30, 35, 40, 60];
// var arr = [];
// for (i = 0; i < number.length; i++) {
//   var result =
//   number[i] % 3 === 0 && number[i] % 5 === 0
//   ? "fizzbuzz"
//   : number[i] % 3 === 0
//   ? "fuzz"
//   : number[i] % 5 === 0
//   ? "buzz"
//   : number[i];
// arr.push(result);
// }
// console.log(arr);


const numbers = [5, -3, 8, -1, 0, -6, 4];
let positiveCount = 0;
let negativeCount = 0;
for (let i = 0; i < numbers.length; i++) {
    numbers[i] > 0 ? positiveCount++ : numbers[i] < 0 ? negativeCount++ : null;
}

console.log("Positive numbers:", positiveCount);
console.log("Negative numbers:", negativeCount);
