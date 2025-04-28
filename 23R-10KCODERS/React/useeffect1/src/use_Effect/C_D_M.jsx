import React, { useEffect,useState } from 'react'

const C_D_M = () => {
    const[value,settValue]=useState(0)

    useEffect(()=>{
        console.log("component did mount");
      settValue(value+1)  
    },[])
  return (
    <div>
      C_D_M
      {console.log("from jsx")}
      
      </div>
  )
}

export default C_D_M