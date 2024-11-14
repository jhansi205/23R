funone(10,function(output,error){
    if(!error){
      funone(output,function(output2,error){
        if(!error){
          funtwo(output2,function(output3,error){
            if(!error){
              console.log('resalt',output3)
            }
          })
        }
      })
    }
  })
  
  
  
  
  
  function funone(value,calback){
    calback(value+10,false)
    
  }
  function funtwo(value,calback){
    calback(value+10,false)
    
  }
  function funthree(value,calback){
    calback(value+10,false)
    
  }