import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Search from './components/RecipeSearch';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element ={<Home />} />
      <Route path="/Search" element ={<Search />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

