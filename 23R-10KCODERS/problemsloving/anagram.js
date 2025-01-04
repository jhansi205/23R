let s1="lemon"
let s2="melon"


if(s1.length===s2.length){
    let emp=""
    is_anagram=true
  for(i of s2){
     if(!emp.includes(i)){
        emp+=i
     }
  }
  for(i of emp){
    let c1=0
    let c2=0
      for(j of s1){
        if(i==j){
           c1++
        }
      }
      for(k of s2){
         if(k==i){
            c2++
         }
      }
      console.log(i,c1,c2);
      
      if(c1!==c2){
        is_anagram=false
        
      }
  }
  if(is_anagram){
    console.log("Anagram");
  }
  
}else{
    console.log("Not Anagram");
    
}