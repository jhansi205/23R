var aos=['mom', 'js', 'malayalam', 'html', 'css','dad']
var arr=[]
for(i=0;i<=aos.length-1;i++){
    var low=0;
    var high=aos[i].length-1
    var isPalindrome=true
    while(low<high){
        if(aos[i][low]!=aos[i][high]){
            isPalindrome=false
            break
        }
        low++;
        high--;
    }if(isPalindrome){
        arr.push(aos[i])
    }
}
console.log(arr);

//problem sloving
var age=prompt("Enter age");
if(age>=0 && age<=12){
    alert("child")
}else if(age>12&&age<=19){
    alert("Teenager")
}else if(age>19&&age<=30){
    alert("Youth")
}else if(age>30&&age<=60){
 alert('middle age')
}else if(age>60){
    alert("old")
}

// //problem2
var students = [
  {
    name: "Alice",
    age: 20,
  },
  { name: "Bob", age: 22 },
  {
    name: "Charlie",
    age: 19,
  },
];
var avg=0

for(i=0;i<students.length;i++){
avg +=students[i].age;

}
var avg_age=avg/3
console.log(avg_age.toFixed(2));

// //problem3

var users1 = [
    {
      name: "Alice",
      age: 17,
    },
    { name: "Bob",
      age: 22 },
    {
      name: "Charlie",
      age: 19,
    },
    {
        name:"David",
        age:16
    }
  ];
  var user2=[]
  for(i=0;i<users1.length;i++){
     if(users1[i].age>=18){
        user2.push(users1[i])

     }
  }
  console.log(user2);

// //problem4
var words1=['apple','banana','apple','orange','apple','banana']
var wordToCount="apple"
var count=0
for(i=0;i<words1.length;i++){
    if(words1[i]===wordToCount){
        count++
    }

}
console.log(count);

const person = { name: "Alice", age: 25 };
person.country='USA'
console.log(person);

const car = { brand: "Toyota", model: "Corolla" };
console.log('model'in car);
console.log('year' in car);

const movie = { title: "Inception", director: "Christopher Nolan", year: 2010 };

const values = Object.values(movie);

console.log(values);  


