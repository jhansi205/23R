import React from 'react'
import Success from './success'
import Error from './error'
const Comp2 = (props) => {
//    if(props.details.city=="hyd"){
//     return(
//         <>
//         <h1>{props.details.name}</h1>
//         <h1>{props.details.city}</h1>
//         </>
//     )
//    }else{
//     return(
//         <>
//         invalid 
//         </>
//     )
//    }
    
   
  
// }
let res=props.details.city==="hyd"?(<>
    <p>{props.details.name}</p>
    <p>{props.details.city}</p>
    </>
):(<>invalid</>)
return(
    res
)
}

export default Comp2