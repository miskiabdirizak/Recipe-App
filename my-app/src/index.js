import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./pages/Home"
import Search from './components/RecipeSearch';
import Login  from './components/Login';
import Signup from './components/Signup';
import DietProfile from './DietProfile';
import EditIngredients from './components/EditIngredients';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/Home" element ={<Home />} />
      <Route path="/Search" element ={<Search />} />
      <Route path="/Login" element ={<Login />} />
      <Route path="/Signup" element ={<Signup />} />
      <Route path='/DietProfile' element = {<DietProfile/>}/>
      <Route path="/EditIngredients" element ={<EditIngredients />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

