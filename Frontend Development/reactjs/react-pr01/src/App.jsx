import React from 'react'
import AppRoute from './routes/route'
import { Link } from 'react-router'

const App = () => {
  return (
    <>
      <nav>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/contact'}>Contact</Link>
        <Link to={'/user/2'}>User</Link>
      </nav>
      <AppRoute />
    </>
  )
}

export default App;