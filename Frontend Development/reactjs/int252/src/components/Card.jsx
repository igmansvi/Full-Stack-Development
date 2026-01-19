import React from 'react'

const Card = ({objData}) => {

    const {imageUrl, cardHeading, cardDescription} = objData;

    return (
        <div className='flex flex-col justify-between w-sm text-center text-2xl border p-4'>
            <div>
                <img src={imageUrl} alt="" className='w-full' />
            </div>
            <div>
                <h1 className='font-semibold'>{cardHeading}</h1>
                <p>{cardDescription}</p>
            </div>
        </div>
    )
}

export default Card