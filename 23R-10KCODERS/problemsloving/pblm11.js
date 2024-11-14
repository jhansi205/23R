debugger
var x=(arr)=>{
    arr.sort((a, b) => a.length - b.length);
    return arr
}
console.log(x(["a", "ccc", "dddd", "bb"]));
