let num="43612"
let max=0
for(i=0;i<num.length;i++){
 for(j=num[i].length;j>=0;j--){
   if(num[i]>num[j]){
    max=num[i]
   }
    
 }
 
}
console.log(max);
