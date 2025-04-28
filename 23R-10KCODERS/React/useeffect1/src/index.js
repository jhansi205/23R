import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Willunmount from './willunmount';
import Testing from './testing';
import C_D_M from './use_Effect/C_D_M';
import C_D_U from './use_Effect/C_D_U';
import C_W_U from './use_Effect/C_W_U';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <App /> */}
    {/* <Willunmount/> */}
    {/* <Testing/> */}
    {/* <C_D_M/> */}
    {/* <C_D_U/> */}
    {/* <C_W_U/> */}
    <Testing/>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
