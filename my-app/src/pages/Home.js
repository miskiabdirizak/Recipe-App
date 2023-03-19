//Add home page Components
import Trending from "../components/Trending";
import LastViewed from "../components/LastViewed";

import React from 'react'

function Home() {
  return (
    <div>
        <Trending/>
        <LastViewed/>
    </div>
  )
}

export default Home