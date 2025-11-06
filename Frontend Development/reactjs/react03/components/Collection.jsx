import React from 'react'

const Collection = () => {
  return (
    <section id='collections' className='mt-4'>
        <div className='bg-gray-300 px-4 py-2'>
            <a href="/home" className='text-blue-500 hover:text-[#1a5ca3] hover:underline'>Home</a>
        </div>
        <div id='coupons-&-offers' className='px-24 mt-8'>
            <div className='text-3xl font-bold text-gray-500'>Coupons & Offers</div>
            <div id='image-gallery' className='mt-4 h-75 flex gap-4 overflow-hidden'>
                <img src="https://api.dominos.co.in/prod-olo-api/images/amazon_home_20210412.jpg" alt="" />
                <img src="https://api.dominos.co.in/prod-olo-api/images/Home_Paytm_20210519.jpg" alt="" />
                <img src="https://api.dominos.co.in/prod-olo-api/images/Home_airtel_30082020.jpg" alt="" />
                <img src="https://api.dominos.co.in/prod-olo-api/images/Home_Freecharge_20210405.jpg" alt="" />
                <img src="https://api.dominos.co.in/prod-olo-api/images/Dominos_Mobi_Home_20210503.jpg" alt="" />
                <img src="https://api.dominos.co.in/prod-olo-api/images/Home_payzapp_20201029.jpg" alt="" />
                <img src="https://api.dominos.co.in/prod-olo-api/images/Home_au_20201029.jpg" alt="" />
            </div>
        </div>
        <div id='explore' className='px-24 mt-8'>
            <div className='text-3xl font-bold text-gray-500'>Explore</div>
            <div className='mt-4'>
                <div className=''>
                    <div className='flex flex-col justify-center'>
                        {/* <img src="https://www.dominos.co.in/assets/menu.png" alt=""/> */}
                        <h1>Our Menu</h1>
                        <p>Explore our range of delicious Pizzas, delivered in 30 minutes!</p>
                    </div>
                    <div>Discover Pizza</div>
                </div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </section>
  )
}

export default Collection