import React,{useEffect} from 'react'
import { useNavigate} from 'react-router-dom'

const Products = () => {
    const navigate=useNavigate()  
    // console.log(navigate);
    // navigate("/")
    const handleNavigateHome=()=>{
        navigate("/")
    }
    const handleNavigateAbout=()=>{
        navigate("/about")
    }
    const handleNavigateProducts=()=>{
        navigate("/products")
    }
    const handleNavigateCart=()=>{
        navigate("/cart")
    }
    useEffect(()=>{
       
        
        navigate("/")
    },[])
    return (
    <div>
        Products
        <button onClick={handleNavigateHome}>Go to home</button>
        <button onClick={handleNavigateAbout}>Go to about</button>
        <button onClick={handleNavigateProducts}>Go to products</button>
        <button onClick={handleNavigateCart}>Go to cart</button>
        </div>
  )
}

export default Products