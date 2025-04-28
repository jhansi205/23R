import {useReducer} from 'react'
import './App.css'
const reducer=(state,action)=>{
  
  switch(action.type){
    case "inc":
      return {count:state.count+1}
    case "dec":
      return {count:state.count-1}
    case "reset":
      return {count:0}
    default:
      return{count:state.count}
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer,{count:1})

  return (
    <>
     <h1>{state.count}</h1>
     <button onClick={()=>{dispatch({type:"inc"})}}>Increment</button>
     <button onClick={()=>{dispatch({type:"dec"})}}>Decrement</button>
     <button onClick={()=>dispatch({type:"reset"})}>reset</button>
    </>
  )
}

export default App
