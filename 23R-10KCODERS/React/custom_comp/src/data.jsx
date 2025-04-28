import React from 'react'
import Table from './table'
const Data = () => {
    const cols=["name","email","mob"]
    let data=[["sasi","sasi1@gmail.com","93020767891"],
    ["sai","sai12@gmail.com","9301930139"],
    ["vani","vani23@gmail.com","9302103491"]
]
  return (
    <div>
        <Table col={cols} users={data}/>
    </div>
  )
}

export default Data