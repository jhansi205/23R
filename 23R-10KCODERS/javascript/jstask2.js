let x=5;
let y=x;
x=10;
console.log(x);
console.log(y);
//o/p:10
//5
//Explanation: step1: x is intiliaze to 5.
//Step2:y variable will assign the value of x. 
//Step3:reassign the value of x is 10.
//Then output will be x value is 10 then y value is 5.

let obj1={name:"Alice"};
let obj2=obj1;
obj1.name="Bob";
console.log(obj1.name);
console.log(obj2.name);
//o/p: Bob
//Bob
/*Explanation: An object with a property name  is created and assigned to obj1
Step2:obj2 is assigned to obj1
Step3: name property of obj1 is changed to Bob
Step4: This will output the current name property of the object  is Bob.
Step5: you change the name property using obj1, that change is reflected in obj2 as well so the output will be Bob.*/

 let a ="hello";
let b=42;
let c=true;
let d={key:"value"};
let e=null;
let f=undefined;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
/*o/p: string
number
boolean
object
object
undefined*/
/*Explanation:step5: undefined represents a variable that has been declared but has not yet been assigned a value.*/

 let numbers=[10,20,30,40,50];
console.log(numbers[2]);
console.log(numbers[0]);
console.log(numbers[numbers.length-1]);
/*o/p: 30
10
50*/
/*Explanation: The array numbers has 5 elements, so numbers.length is 5. numbers.length - 1 is 4, which is the index of the last element.*/
let fruits=["apple","banana","mango"];
 fruits[1]="orange";
console.log(fruits);
/*o/p: [ 'apple', 'orange', 'mango' ]*/
/*Explantion: 
replace "banana" (the second fruit) with "orange".
it shows ['apple', 'orange', 'mango'].*/

let matrix =[
[1,2,3],
[4,5,6],
[7,8,9]
];
console.log(matrix[1][2]);
console.log(matrix[2][0]);
/*o/p: 6
7*/

 let person={
  name:"John",
  age:25,
  city:"New York"
};
console.log(person.name);
console.log(person.age);
/*o/p: John
25*/
/*Explanation:create a person object with three properties:name,age and city.The output will be name value is john and age   value is 25 */

 let car={
  make:"Toyata",
  model:"Corolla",
  year:2021
};
console.log(car["make"]);
console.log(car["model"]);
/*o/p: Toyata
Corolla*/
/*Explanation: create a car object with three properties:make,model and year.The output will be make value is toyata and model   value is corolla */

let book={
  title:"The Great Gatsby",
  author:"F. Scott Fitzgerlad"
};
book.author="Anonymous";
console.log(book.author);
//o/p: Anonymous
/*Explanation: create a book object with two properties: title and author. The author is initially "F. Scott Fitzgerald". update the author of the book to "Anonymous".so the new value is "Anonymous"*/

let student={
  name:"Alice",
  grade:"A"
};
student.age=20;
console.log(student);
//o/p: { name: 'Alice', grade: 'A', age: 20 }
