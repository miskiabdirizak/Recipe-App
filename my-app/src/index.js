import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Search from './components/RecipeSearch';
import Register from './components/Register'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/"  element ={<Search />} />
      <Route path="/Login" element ={<Home />} />
      <Route path="/Search" element ={<Search />} />
      <Route path="/Register" element = {<Register/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

