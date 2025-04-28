import React, { useEffect, useState } from 'react'

const C_D_U = () => {
    const[val,settVal]=useState(0)
    const[val2,settVal2]=useState(0)
    useEffect(()=>{
        console.log("component did update",val,val2);
        
    },[val,val2])
  return (
    <div>
        C_D_U
        <button onClick={()=>settVal(val+1)}>change val</button>
        <button onClick={()=>settVal2(val2+1)}>change val2</button>
        </div>
  )
}

export default C_D_U