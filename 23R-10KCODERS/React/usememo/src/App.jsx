// // import { useReducer} from 'react'
// // import './App.css'
// // const reducer=(state,action)=>{
// //   switch(action.type){
// //     case "inc":
// //       return {count:state.count+1}
// //       case "dec":
// //       return {count:state.count-1}
// //       default:
// //         return {count}
// //   }

// // }
// // function App() {
// //   const [state, dispatch] = useReducer(reducer,{count:0})

// //   return (
// //     <>
// //      <h1>{state.count}</h1> 
// //      <button onClick={()=>{dispatch({type:"inc"})}}>increment</button>
// //      <button onClick={()=>{dispatch({type:"dec"})}}>decrement</button>
// //     </>
// //   )
// // }

// // export default App







// import { useReducer} from 'react'
// import './App.css'
// const reducer=(state,action)=>{
//   switch(action.type){
//     case "inc":
//       return {count:state.count+1}
//       case "dec":
//       return {count:state.count-1}
//       default:
//         return {count:state.count}
//   }

// }
// function App() {
//   const [state, dispatch] = useReducer(reducer,{items:[{id:"1",count:20}]})

//   return (
//     <>
//      <h1>{state.count}</h1> 
//      <button onClick={()=>{dispatch({type:"inc"})}}>increment</button>
//      <button onClick={()=>{dispatch({type:"dec"})}}>decrement</button>
//     </>
//   )
// }

// export default App





import React, { use, useState } from "react";
import { useMemo } from "react";
const App = () => {
  const[count,setCount]=useState(0)
  const[count2,setCount2]=useState(0)
  const memo=useMemo(()=>{

    console.log(count);
    
  },[count])
  
  

  return (
    <>
      <h1>{count}</h1>
      <button onClick={()=>{setCount(count+1)}}>increment</button>
      <h1>{count2}</h1>
      <button onClick={()=>{setCount2(count2+1)}}>increment</button>
    </>
  );
};

export default App;
