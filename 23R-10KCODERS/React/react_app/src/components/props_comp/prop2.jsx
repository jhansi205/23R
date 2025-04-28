import React from 'react'

const Prop2 = (props) => {
    props.details[0]="siva"
    const[name,age,city,mob]=props.details
    console.log(name,age,city,mob);
    
    console.log(props);
    let res=city==="hyd"?(<>{name},{age},{city},{mob}</>):(<>invalid user</>)
    return(
        res
    )
  return (
    <div>Prop2</div>
  )
}

export default Prop2