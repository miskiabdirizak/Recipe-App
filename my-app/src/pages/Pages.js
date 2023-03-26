import React from 'react'
import Home from './Home'
import Search from '../components/RecipeSearch'
import Navbar from "../components/Nav"
import Recipe from '../components/Recipe'
import { Login } from '../components/Login'

//Recipe search is the home page for now
function Pages() {
  return (
    <div>
      <Search />
      <Login />
    </div>
  )
}

export default Pages