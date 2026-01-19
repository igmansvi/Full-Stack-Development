import React from 'react'

const StudentCard = ({ data, index, deleteData }) => {
    return (
        <div className='border p-4 w-2xs rounded-sm'>
            <div className='space-x-3'>
                <span>index: {index}</span><br />
                <span>name: {data.username}</span> <br />
                <span>email: {data.useremail}</span> <br />
                <span>course: {data.usercourse}</span> <br />
                <span>number: {data.usernumber}</span>
            </div>
            <div className='mt-4'>
                <button onClick={() => deleteData(index)} className='bg-red-300 text-white w-full px-8 py-2 hover:bg-red-500 rounded-sm'>Delete</button>
            </div>
        </div>
    )
}

export default StudentCard