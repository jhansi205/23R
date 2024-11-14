var n=123;
var rem;
var rev_number=0;
while(n>0){
    rem=n%10;
    rev_number=(rev_number*10)+rem;
    n=Math.floor(n/10);
  
}
console.log(rev_number);



