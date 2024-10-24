//1.Code:
 var car={
  brand:"Toyata",
  model:"Corolla",
  year:2020
};
for(i in car){
  console.log(`${i}:${car[i].toString().toUpperCase()}`);
}
/*o/p: brand:TOYATA
model:COROLLA
year:2020*/

//2.code:
var numbers=[1,2,3,4,5];
for(i in numbers){
  console.log(`${numbers[i]}-${"HI"}`);
}
/*o/p: 
1-HI
2-HI
3-HI
4-HI
5-HI*/

//3.code:
var fruits=['Apple','Banana','Cherry','Date'];
 for(i in fruits){
   console.log(`${i} -${fruits[i].toUpperCase()}`)
 }
/*o/p: 0 -APPLE
1 -BANANA
2 -CHERRY
3 -DATE*/

//4.code:
var obj={
  name:'John',
  age:30,
  address:{
    city:'Los Angeles',
    state:'CA'
  }
};
obj.address.city="San Francisco"
console.log(obj);
/*o/p: {
  name: 'John',
  age: 30,
  address: { city: 'San Francisco', state: 'CA' }
}*/

//5.code:
var car={
  brand:"Toyata",
  model:"Camry",
  year:2020
};
car.model="Corolla";
car.year=2022;
console.log(car);
//o/p: { brand: 'Toyata', model: 'Corolla', year: 2022 }

//6.code:
var recipe={
  name:'Pasta',
  servings:2,
  ingredients:['noodless','sauce']
};
recipe.ingredients.push("cheese");
console.log(recipe);
/*o/p: {
  name: 'Pasta',
  servings: 2,
  ingredients: [ 'noodless', 'sauce', 'cheese' ]
}*/
