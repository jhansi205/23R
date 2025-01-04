function sigIn(callback){
    console.log("signin successfully")
    callback()
  }
  function selectMovie(callback){
    console.log("selected movie successsfully")
    callback()
  }
  function chooseSeats(callback){
    console.log("choosing seats successfully")
    callback()
  }
  function payment(){
    console.log("payment successfully")
  
  }
  sigIn(()=>{
    selectMovie(()=>{
      chooseSeats(()=>{
        payment()
      })
    })
  })
  
 // callback hell
  function sum(val,callback){
    callback(val+22)
  }
  function sub(val,callback){
    callback(val-2)
  }
  function mul(val,callback){
    callback(val*2)
    
  }
  function div(val,callback){
    callback(val/10)
  }
  sum(10,(addres)=>{
      sub(addres,(subres)=>{
        mul(subres,(mulres)=>{
          div(mulres,(divres)=>{
            console.log(divres)
          })
        })
      })
   })
   
   
   //promises
   let a=new Promise((reslove,reject)=>{
     data=9
     if(data==10){
       reslove("promise is resloved")
     }else{
       reject("promise is rejected")
     }
   })
   //consuming promise
   a.then((res)=>{console.log(res)}).catch((rej)=>{
     console.log(rej)
   })