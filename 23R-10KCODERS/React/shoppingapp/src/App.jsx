import React, { useState } from 'react'
import './App.css'

function App() {
  const [products, setProducts] = useState([])

  const getData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((val) => val.json())
      .then((data) => setProducts(data))
  }
  const addCart = (product) => {
    console.log("Added to cart: ", product);
  }
  return (
    <>
      <button onClick={getData}>Get Products</button>
      <div className='cards'>
        {products.map((val) => (
          <div className="card" key={val.id}>
            <img src={val.image} alt={val.title} width="100" />
            <h4>Price: ${val.price}</h4>
            <h3>{val.title}</h3>
            <p>Rating: {val.rating.rate} ⭐ ({val.rating.count} reviews)</p>
            <button onClick={() => addCart(val)} style={{margin:"10px"}}>Add to cart</button>
            <button>Buy now</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
