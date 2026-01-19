import React from 'react'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center p-4 bg-gray-300 text-xl'>
            <div>Home</div>
            <div className='font-bold'>Student Registration Form</div>
            <div className='bg-blue-500 px-2 py-1 text-white hover:bg-blue-700'>Login</div>
        </div>
    )
}

export default Navbar