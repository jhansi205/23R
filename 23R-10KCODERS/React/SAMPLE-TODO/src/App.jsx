import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todo, setTodo] = useState([])
  const [addtodo,setAddtodo]=useState("")
  const handleChange =(event)=>{
    let task=event.target.value
    if(task.length>0){
    setAddtodo(task)
    }

  }
  const adduserTodo=()=>{
   
    if(addtodo.length>0){
      setTodo([...todo,addtodo])
      setAddtodo("")
    }
    
  }
  const handleDelete=(ind)=>{
     let arr=todo.filter((ele,i)=>{
        return  i!==ind
      })
      setTodo(arr)
  }
  return (
    <>
    <div className='d-flex'>
     {todo?.map((ele,ind)=>{
       return <div key={ind} className='card m-3'>
        <p>{ele}</p> <button style={{color:"red"}} onClick={()=>handleDelete(ind)}>delete</button>
       </div>
     })}
     </div>
     <input type="text"  placeholder='Enter todo' name='todo' value={addtodo}  onChange={handleChange}/> 
     <button  onClick={adduserTodo}>addTodo</button>
      
    </>
  )
}

export default App
