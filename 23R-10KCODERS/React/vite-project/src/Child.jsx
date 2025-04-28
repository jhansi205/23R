import React from 'react'
import { useContext } from 'react'
import { propContext } from './App'
function Child() {
    const prop=useContext(propContext)
  return (
    <div style={{color:"blue"}}>Child
        <hr/>
        <h1>you got property of {prop} rupees</h1>
    </div>
  )
}

export default Child