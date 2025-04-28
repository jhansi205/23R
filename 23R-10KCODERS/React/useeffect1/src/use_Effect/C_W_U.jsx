import React, { useEffect, useState } from 'react'

const C_W_U = () => {
    let[time,setTime]=useState()
    useEffect(()=>{
       time=setInterval(()=>{
        console.log("interval");
        
       },2000)
     window.sessionStorage.setItem("key","radha")
       return ()=>{
         clearInterval(time)
         window.sessionStorage.removeItem("key")
       }
    },[])
  return (
    <div>

        C_W_U
        </div>
  )
}

export default C_W_U