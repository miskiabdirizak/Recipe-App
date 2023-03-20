//Add home page Components
import Trending from "../components/Trending";
import LastViewed from "../components/LastViewed";
import Navbar from "../components/Nav"

import React from 'react'

function Home() {
  return (
    <div>
        <Navbar />
        <Trending/>
        <LastViewed/>
    </div>
  )
}

export default Home