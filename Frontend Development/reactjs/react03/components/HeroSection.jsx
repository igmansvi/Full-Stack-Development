import React from 'react'

const HeroSection = () => {
    return (
        <section id='hero-section' className='flex justify-between bg-[#1a5ca3] pl-24 sticky'>
            <div className='flex justify-center items-center'>
                <div className='text-white flex flex-col gap-4'>
                    <div className=''>
                        <h1 className='text-4xl font-bold'>Domino's online ordering</h1>
                        <h1 className='text-blue-300'>Yummy pizza delivered fast & fresh</h1>
                    </div>
                    <div className='bg-[#1fb31a] px-4 py-4 font-bold text-xl text-center rounded-sm'>ORDER ONLINE NOW</div>
                </div>
            </div>
            <div>
                <div>
                    <img src="https://www.dominos.co.in/assets/header_bg.png" alt="menu" />
                </div>
            </div>
        </section>
    )
}

export default HeroSection;