import {useEffect, useState} from "react"


function App() {
 const[id,setCount]=useState(1)
 const[products,setProducts]=useState(1)
  console.log(products); // const [products,setProducts]=useState([])
  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${id}`).then((res)=>res.json()).then((data)=>setProducts(data))
    
  },[id])
  return (
   <div>
    {/* <h1>{msg}</h1>
    <button onClick={()=> {setMsg("jhansi")}}>update the state</button> */}
   <hr/>
   {/* {products.map((pro,ind)=>{
      return <div key={ind}>
        {pro.title}
        <img src={pro.image} height={"100px"} width={"100px"}></img>
        </div>
   })} */}
   <h1>{id}</h1>
   <button onClick={()=>setCount(id+1)}>increment</button>
   <hr/>
   <p>{products.title}</p>
    </div>
  );
}

export default App;
