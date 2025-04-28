// import React, { useEffect, useState } from 'react'
// // import Lazy_child from './lazy_child'
// import { Suspense,lazy } from 'react'
// const Lazy_comp=lazy(()=>import('./lazy_child'))
// const Lazy_parent = () => {
//     const[show,setShow]=useState(false)
//     useEffect(()=>{
//         setTimeout(()=>{
//              setShow(true)
//         },5000)
//     },[show])
//   return (
//     <div>
//        <Suspense fallback={<div><p>the component still loading.......</p><img src="" alt="" /></div>}>
//        {show?<Lazy_comp/>:""}
//        </Suspense>
//     </div>
//   )
// }

// export default Lazy_parent
import React, { useState } from 'react'

const Parent = () => {
  const[count,setCount]=useState(0)
  return (
    <div>
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)}>Increment</button>
    <Child/>
    </div>
  )
}




export default Parent