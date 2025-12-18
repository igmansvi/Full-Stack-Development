import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './components/Home'
import About from './components/About'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={
            <div className='text-center'>Hello, World</div>
          }/>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App