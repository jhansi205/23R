import './App.css'
import { createContext } from 'react'
import Child from './child'
export const propContext=createContext()
function App() {
 

  return (
    <>
     <propContext.Provider value={100000000}>
      <Child/>
      </propContext.Provider> 
    </>
  )
}

export default App
