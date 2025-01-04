let num="2355"
let sumofodd=0

for(i=0;i<num.length;i++){
    if(num[i]%2==1){
       
        
       sumofodd+=Number(num[i])
    }
}
console.log(sumofodd);
