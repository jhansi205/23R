let l1 = [2,4,3]
let s1=Number(l1.join(''))
console.log(s1);

let l2 = [5,6,4]
let s2=Number(l2.join(''))
console.log(s2);
var sum=s1+s2

var arr=[]
var rev=0
while(sum>0){
    let rem=sum%10;
    arr.push(rem)
    sum=Math.floor(sum/10)
}
console.log(arr);

