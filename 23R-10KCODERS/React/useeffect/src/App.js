import './App.css';
import {useState}  from 'react';

function App() {
 const[value,setValue]=useState(0)
  const[data,setData]=useState([])
  const[arr,setArr]=useState(["hi","hello","hey"])
  console.log(data);
  
  const handleIncrement=()=>{
    setValue(value+1)
    setData(arr[value])
  }
  // const handleChange=(event)=>{
  //   console.log(event.target.value);
    
  //   return setData(event.target.value)
  // }
  return (
    <div className="App">
    {/* <p>{data}</p> */}
    <h1>{arr[value]}</h1>
    {/* <button onClick={handleIncrement}>Increment</button>
    <button onClick={()=>setValue(value-1)}>Decrement</button> */}
    {/* <input type="text" value={data} onChange={handleChange} placeholder='username'/> */}
    <button onClick={handleIncrement}>display</button>
    </div>
  );
}

export default App;
