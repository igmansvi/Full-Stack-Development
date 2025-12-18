import React from 'react'
import StudentCard from './StudentCard'

const StudentList = ({data, deleteData}) => {
  return (
    <div className='grid grid-cols-3 align-items-center items-center mx-auto gap-2 max-w-4xl space-x-3 mt-4'>
        {data.map((obj, index) => (
            <StudentCard key={index} data={obj} index={index} deleteData={deleteData} />
        ))}
    </div>
  )
}

export default StudentList