import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex justify-between px-32 py-4 items-center'>
            <div className='flex justify-center items-center gap-2'>
                <div>
                    <img src="https://www.dominos.co.in/assets/Logo.png" alt="domino's logo" />
                </div>
            </div>
            <div className='flex justify-between gap-4 text-sm font-bold text-gray-500'>
                <div className='hover:text-[#1a5ca3]'>OUR MENU</div>
                <div className='hover:text-[#1a5ca3]'>DOMINO'S STORES</div>
                <div className='hover:text-[#1a5ca3]'>GIFT CARD</div>
                <div className='hover:text-[#1a5ca3]'>CORPORATE ENQUIRY</div>
                <div className='hover:text-[#1a5ca3]'>CONTACT</div>
            </div>
            <div className='bg-[#f3223b] text-white px-2 py-2 rounded-sm'>
                Download App
            </div>
        </nav>
    )
}

export default Navbar;