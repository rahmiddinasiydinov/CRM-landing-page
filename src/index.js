import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import ThemeContextComponent from './Contexts/Context'
ReactDOM.render(
  
  <BrowserRouter>
    <React.StrictMode>
      <ThemeContextComponent>
        <App />
      </ThemeContextComponent>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);