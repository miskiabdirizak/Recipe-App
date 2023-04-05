import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Search from './components/RecipeSearch';
import Login  from './components/Login';
import Signup from './components/Signup';
import DietProfile from './DietProfile';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element ={<Home />} />
      <Route path="/Search" element ={<Search />} />
      <Route path="/Login" element ={<Login />} />
      <Route path="/Signup" element ={<Signup />} />
      <Route path='/DietProfile' element = {<DietProfile/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

