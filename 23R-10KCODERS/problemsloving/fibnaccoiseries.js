var a = 0;
var b = 1;
var c;
var count = 0;

for (i = 0; i <= 10; i++) {
//   if (count == 10) {
    console.log(a);  // This will print `a` when `count` reaches 10.
//   }
  c = a + b;
  a = b;
  b = c;
 
}

// console.log(count);  // Prints 11
