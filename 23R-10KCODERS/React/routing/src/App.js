import './App.css';
import { BrowserRouter,Routes,Route, } from 'react-router-dom';
import Home from './components/home';
import Products from './components/products';
import About from './components/about';
import Cart from './components/cart';
import Login from './components/login';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<Login/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
