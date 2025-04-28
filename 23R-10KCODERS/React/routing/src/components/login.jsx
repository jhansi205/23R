import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState,useEffect} from 'react'
const Login = () => {
    const [login,setLogin]=useState(false)
    const[name,setName]=useState("")
    const[password,setPassword]=useState("")
    const navigate=useNavigate()
    useEffect(()=>{
     if(name==="jhansi"&&password==="jhansi123"){
        navigate("/")
     }
    },[login,name,password])
    const handleChange=(event)=>{
        event.preventDefault()
        console.log(event.target.value);
        if(event.target.name=="name"){
            setName(event.target.value)
        }
        if(event.target.name=="password"){
            setPassword(event.target.value)
        }
    }
  return (
    <div>
        login
        <hr/>
        <p>{name} </p>
        <p>{password}</p>
        <input type='text'name='name' onChange={handleChange} placeholder='enter the username' /><br /><br />
        <input type='text'  name="password" onChange={handleChange} placeholder='enter the password' /><br /><br />
        {/* <button onClick={()=>{
            setLogin(!login)}}>login</button> */}
        </div>
  )
}

export default Login