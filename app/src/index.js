import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import{ createGlobalStyle} from "styled-components";

 const Globalstyle =createGlobalStyle`

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body{
  background-color: #323334;
  font-family: 'Inter', sans-serif;
}
 `;




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Globalstyle/>
  </React.StrictMode>
);

