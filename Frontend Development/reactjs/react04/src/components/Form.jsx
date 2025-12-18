import React from 'react'
import FormInput from './FormInput'
import FormOutput from './FormOutput'

const Form = () => {
    return (
        <div className='max-w-2xl mx-auto mt-8 bg-white rounded-xl shadow-lg p-6 space-y-6'>
            <h1 className='text-2xl font-bold text-gray-800 text-center'>Data Form</h1>
            <FormInput />
            <FormOutput />
        </div>
    )
}

export default Form