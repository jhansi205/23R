import React, { useEffect, useState } from 'react'

const Lazy_child = () => {
    const[products,setProducts]=useState(null)
    useEffect(()=>{
        console.log("child called");
        
       fetch("https://fakestoreapi.com/products").then(data=>data.json()).then(res=>setProducts(res).catch(err=>console.log(err))
       )
    },[])
  return (
    <div>
        {products?.map((ele,ind)=>{

            return <div key={ind}>
                <h1>{ele.title}</h1>
                <p>{ele.description}</p>
                <h3>{ele.price}</h3>
                <p><img src={ele.image} alt=""  height={"150px"}/></p>
                </div>
        })}
    </div>
  )
}

export default Lazy_child