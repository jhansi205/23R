let ip= ['Z', 'A', 'P', 'C', 'A', 'Z' , 'K', 'N', 'C'];
let op=[]
// Step 1: Remove Duplicates
for(i=0;i<ip.length;i++){
  let flag=false
   for(j=0;j<op.length;j++){
     if(ip[i]===op[j]){
        flag=true
        break
     }
   }
   if(!flag){
    op.push(ip[i])
   }
}
let temp;
for(i=0;i<op.length;i++){
    for(j=i+1;j<op.length;j++){
        if(op[i]>op[j]){
         temp=op[i];
         op[i]=op[j]
         op[j]=temp
         
        }
    }
}
console.log(op);

