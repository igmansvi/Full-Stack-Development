import React from 'react'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center p-5 bg-slate-300'>
            <div>
                <img src='https://www.shikshababa.com/images/colleges/logos/logo-lovely-professional-university.webp' alt='lpu-logo' className='w-20'></img>
            </div>
            <div className='space-x-6'>
                <button className='border p-4 bg-blue-700 text-white'>Home</button>
                <button className='border p-4 bg-blue-700 text-white'>About us</button>
                <button className='border p-4 bg-blue-700 text-white'>Contact us</button>
            </div>
            <div>
                <button className='border p-4 bg-red-700 text-white'>Download App</button>
            </div>
        </div>
    )
}

export default Navbar
