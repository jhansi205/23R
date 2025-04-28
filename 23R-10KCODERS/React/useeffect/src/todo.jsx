import React, { useState } from 'react'

const Todo = () => {
    const[todo, setTodo]=useState([])
    const  [inputValue, setInputValue] = useState("");
    const handleTodo=(event)=>{
     
      event.preventDefault();
      if (!inputValue.trim()) {
          return;
      }
      setTodo(prevTodos => prevTodos.concat([inputValue]));
      setInputValue("");
  };
  return (
    <div>
     <input type='text'  placeholder='enter todo'  value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
     <button onClick={handleTodo}>add todo</button>
     {todo.map((ele,ind)=>{
        return <p key={ind}>{ele}</p>
     })}
    </div>
  )
}

export default Todo