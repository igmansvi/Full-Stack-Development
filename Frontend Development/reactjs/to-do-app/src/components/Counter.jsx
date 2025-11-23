import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div className='border-0 shadow-xl rounded-lg p-4 w-sm bg-gray-200'>
            <button onClick={() => setCount(count + 1)} className='border-0 rounded-lg p-4 w-full bg-blue-300 hover:bg-blue-500 hover:text-white'>+</button>
            <div className='text-center m-4 bg-gray-300 p-4 rounded-lg'>{count}</div>
            <button onClick={() => setCount(count - 1)} className='border-0 rounded-lg p-4 w-full bg-blue-300 hover:bg-blue-500 hover:text-white'>-</button>
        </div>
    )
}

export default Counter