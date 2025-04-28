import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Lazy_child from '../lazycomponent/lazy_child.jsx'
import Lazy_parent from '../lazycomponent/lazy_parent.jsx'
import Parent from '../lazycomponent/parent.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Parent/>
   
  </StrictMode>
)
