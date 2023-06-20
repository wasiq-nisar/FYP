import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { Cartprovider } from './context/cartContext.jsx';
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Cartprovider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Cartprovider>
  </React.StrictMode>
);
