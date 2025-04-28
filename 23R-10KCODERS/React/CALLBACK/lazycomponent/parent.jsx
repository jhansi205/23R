import React, { useCallback, useState } from 'react'
import Child from './child'

const Parent = () => {
  const[count,setCount]=useState(0)
  const handleDecrement=useCallback(()=>{
    setCount(count-1)
  },[])
  return (
    <div>
    <h1>{count}</h1>
   
    
    <button onClick={()=>setCount(count+1)}>Increment</button>
    <Child decrement={handleDecrement}/>
    </div>
  )
}




export default Parent