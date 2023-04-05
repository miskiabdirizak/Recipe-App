//Add home page Components
import Navbar from "../components/Nav"
import cuttingboard from "../components/cuttingboard.jpg"
import "./home.css"
import CardComponent from "../components/Cards"
import Footer from "../components/Footer"
import React from 'react'

function Home() {
  return (
    <div class="page__grid" role="grid">
        <Navbar />
        <CardComponent />
        <img class = "homeimg" src={cuttingboard} width="100%" ></img>
        <div class="content">
       
            <h1>Find Your Recipe</h1>
            <p>By using our website you can search for many delicious recipes. Begin using our health planner so we can personalize your searches for you.</p>
        </div>
        <Footer />
    </div>
  )
}

export default Home