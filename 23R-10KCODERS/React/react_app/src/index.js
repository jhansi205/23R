import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Comp1 from './components/Validation/comp1';
import Prop1 from './components/props_comp/prop1';
// import Parent from './components/parent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* hello */}
    {/* <Parent/> */}
    {/* <Comp1/> */}
    <Prop1/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

