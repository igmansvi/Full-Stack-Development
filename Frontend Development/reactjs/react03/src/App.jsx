import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Collection from '../components/Collection'

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <Collection />
      </main>
    </>
  )
}

export default Home;