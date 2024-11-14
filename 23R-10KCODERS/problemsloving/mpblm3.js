function getBudgets(obj){
   var result=0
   for(i=0;i<obj.length;i++){
     result+= obj[i].budget;
   }
   return result;
}
console.log(getBudgets([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
  ]
  ));
  console.log(getBudgets([
    { name: "John",  age: 21, budget: 29000 },
    { name: "Steve",  age: 32, budget: 32000 },
    { name: "Martin",  age: 16, budget: 1600 }
  ]) 
  );
  
