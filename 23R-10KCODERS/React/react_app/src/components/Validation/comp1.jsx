import React from 'react'
import Comp2 from './comp2'
const comp1 = () => {
  let person={
    name:"roshan",
    city:"hyd"
  }
  return (
    <div>
        <Comp2 details={person}/>
    </div>
    
  )
}

export default comp1