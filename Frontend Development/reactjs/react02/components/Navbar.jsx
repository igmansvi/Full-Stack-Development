import React from 'react'
import './Navbar.css'
import Logo from './navbar/Logo'
import Heading from './navbar/Heading'
import Icon from './navbar/Icon'

const Navbar = () => {
    return (
        <div className='nav'>
            <Logo />
            <Heading />
            <Icon />
        </div>
    )
}

export default Navbar