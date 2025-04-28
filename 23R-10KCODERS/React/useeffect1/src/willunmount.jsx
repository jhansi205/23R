import React, { useEffect, useState } from 'react'

const Willunmount = () => {
    let[timer,setTimer]=useState(null)
    useEffect(()=>{
       timer=setInterval(()=>{
        console.log("interval called");
        
       },1000)
       //clean up function
       return ()=>{
        clearInterval(timer)
    }
    },[timer])//dependency variables
   
  return (
    <div>
     <h1>Willunmount</h1>
    </div>
  )
}

export default Willunmount