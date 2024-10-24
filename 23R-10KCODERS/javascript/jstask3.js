/*Example
[1,2,3]-> [1,2,3,4]
Code: */
var arr = [1,2,3];
          arr.push(4);
        console.log(arr);
//o/p: [ 1, 2, 3, 4 ]
/*2.write a javascript code to remove the last element from an array using the pop method.
Example:[1,2,3,4]-> [1,2,3]
Code:*/
 var arr1=[1,2,3,4];
            arr1.pop();
          console.log(arr1);
//o/p: [ 1, 2, 3 ]
/*3. write a javascript code to add  an element to the beginning of  an array using the unshift method.
Example:[2,3,4]->[1,2,3,4]
Code:*/
var arr = [2,3,4]
arr.unshift(1);
console.log(arr);
//o/p:[1,2,3,4]
/*4. write a javascript code to remove the first element from an array using the shift method.
Example:[1,2,3,4]->[2,3,4]
Code:*/
var arr = [1,2,3,4]
arr.shift();
console.log(arr);
//o/p:[2,3,4]
/*5.write a javascript code to convert an array into a string using  the join method
Example:[1,2,3]-> "123"
Code:*/
var arr = [1,2,3]
 var x= arr.join("");
console.log(x);
//o/p:123
/*1.what will be the output of [1,2,3,4].pop()?
o/p:[1,2,3]*/
/*2.what will be the output of [1,2,3,].push(4)?
o/p:[1,2,3,4]*/
/*3.what will be the output of [1,2,3,4].shift()?
o/p: [ 2, 3, 4 ]*/
/*4.what will be the output of [2,3,4].unshift(1) ?
o/p:[ 1, 2, 3, 4 ]*/
/*5.what will be the output of     [1,2,3].join(“ ”)?
o/p;123*/



