let str="javascript is scriptlanguage";
let emp=""
let most_rep_char=""
let count=0
//for getting unique values
for(i of str){
    if(!emp.includes(i)&&i!==" "){
        emp+=i
    }
}
//console.log(emp);//removing duplicate values

//compare unique values in the values of string
for(i of emp){
    let c=0
    for(j of str){
        if(i==j){
            c++//to reset the count to 0 for each character
        }
    }
    console.log(i,c);
    //to print most repeated character
    if(c>count){
        most_rep_char=c
        count=c//3 4
    }
    
}
console.log(most_rep_char);
