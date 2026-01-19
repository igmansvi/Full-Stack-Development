import React from 'react'
import Card from './Card'

const Cards = (props) => {
    return (
        <div className='grid grid-cols-3 gap-4 p-4 mx-auto justify-items-center'>
            {props.obj.map((data) => {
                return <Card objData={data} />
            })}
        </div>
    )
}

export default Cards