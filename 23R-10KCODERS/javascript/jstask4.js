//1.code:
 var fruits=['Apple','Banana','Orange'];
var x=fruits.join(",");
console.log(x);
//o/p: Apple,Banana,Orange
//2.code:
var numbers=[1,2,3,4,5];
var x=numbers.join("-");
console.log(x);
//o/p: 1-2-3-4-5

//3.code:
var chars=['H','e','l','l','o'];
var x=chars.join("");
console.log(x);
//o/p: Hello

/*slice method
------------------*/
//4.code:
var text="Javascript is awesome";
var x=text.slice(0,10);
console.log(x);
//o/p: Javascript
//5.code:
var sentence="I love learning Javascript!";
var x=sentence.slice(7,15);
console.log(x);
//o/p: learning
//6.code:
var text="Frontend Development";
var x=text.slice(9);
console.log(x);
//o/p: Development

/*split method
------------------*/
//7.code:
 var date="2024-10-21";
var x=date.split("-");
console.log(x);
//o/p: [ '2024', '10', '21' ]

//8.code:
var text='I love JavaScript programming';
var x=text.split(" ").slice(0,2)
console.log(x);
//o/p: [ 'I', 'love' ]

//9.code:
var url = 'https://www.example.com/path/page.html';
var x = url.split("/");
console.log(x);
//o/p: ["https:", "", "www.example.com", "path", "page.html"]