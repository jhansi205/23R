import React from 'react'

const Table = (cols,data) => {
    console.log(cols,data);
    
  return (
    <div>
        <table border={"2px"}>
        <thead>
        <tr>
            {cols.col.map((e,index)=>{
                return <td key={index} style={{fontWeight:"bold"}}>{e}</td>
            })}
            </tr>
        </thead>
           <tbody>
           {cols.users.map((e,i)=>{
            
            return <tr key={i}>{e.map((ele,i)=>{
               return  <td key={i}>{ele}</td>
            })}</tr>
         
          })}
      
           </tbody>
        </table>
    </div>
  )
}

export default Table