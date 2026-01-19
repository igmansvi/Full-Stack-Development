import React from 'react'
import { Link } from 'react-router'

const NavBar = () => {
    return (
        <div className='p-4'>
            <ul className='flex justify-evenly'>
                <li className='border px-2'>
                    <Link to={'/home'}>Home</Link>
                </li>
                <li className='border px-2'>
                    <Link to={'/'}>App</Link>
                </li>
                <li className='border px-2'>
                    <Link to={'/about'}>About</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar