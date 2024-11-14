var input=[1,6,3,1,5,9,7,2,1,9,3,7,8,9,10];
var find=7;
var count=0;
for(i=0;i<input.length;i++){
    if(input[i]===find){
        count++
    }
}
console.log(`${find} present ${count} times`);
