let x=function(obj){

    return Object.entries(obj);
}

console.log(x({
    a:1,
    b:2
}));
console.log(x({ shrimp: 15, tots: 12 }));
console.log(x({}));


