let x=((str)=>{
 if(!str) return ' ';
 let words=str.split(/[-_]/)
 for(i=0;i<words.length;i++){
    words[i]=words[i][0].toUpperCase()+ words[i].slice(1).toLowerCase();
 }
 return words.join("")
});
console.log(x("A-B-C"));
console.log(x("the-stealth-warrior"));
console.log(x("The_Stealth_Warrior"));

