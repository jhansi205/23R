function squareNumbers(arr){
 var x=arr.map(a=>a**2);
 return x
}
console.log(squareNumbers([1,2,3,4,5,6,7]));
//string to uppercase using map method
function stringToUppercase(arr1){
  var x1=arr1.map(a=>a.toUpperCase());
  return x1
}
console.log(stringToUppercase(["html","css","js","react","nodejs","python"]));

