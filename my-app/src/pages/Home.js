//Add home page Components
import Navbar from "../components/Nav"
import {Login} from "../components/Login";    //import the components

import React from 'react'

function Home() {
  return (
    <div>
        <Navbar />
        <Login />
    </div>
  )
}

export default Home