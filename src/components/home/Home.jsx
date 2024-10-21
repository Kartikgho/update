import React from "react"
// import AboutCard from "../about/AboutCard"
import Homeblog from "./Homeblog"
import Homeabout from "./Homeabout"
import Hero from "./hero/Hero"
import Homeprice from "./Homeprice"
import Testimonal from "./testimonal/Testimonal"

const Home = () => {
  return (
    <>
      <Hero />
      {/* <AboutCard /> */}
      <Homeabout />
      <Testimonal />
      <Homeblog />
      <Homeprice />
    </>
  )
}

export default Home