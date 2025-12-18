import React, { useContext, useRef } from 'react'
import AppContext from '../context/appContext';

const FormInput = () => {
    const { addData } = useContext(AppContext);
    const emailRef = useRef();
    const numberRef = useRef();
    const passwordRef = useRef();

    function handleAddData(e) {
        e.preventDefault();
        if (!emailRef.current.value || !numberRef.current.value || !passwordRef.current.value) return;

        const studentData = {
            email: emailRef.current.value,
            number: numberRef.current.value,
            password: passwordRef.current.value,
        };

        addData(studentData);
        emailRef.current.value = '';
        numberRef.current.value = '';
        passwordRef.current.value = '';
    }
    return (
        <form className='space-y-4' onSubmit={(e) => handleAddData(e)}>
            <fieldset className='border border-gray-300 rounded-lg p-4'>
                <legend className='text-lg font-semibold text-gray-700 px-2'>Data</legend>
                <div className='flex flex-col gap-4'>
                    <input
                        ref={emailRef}
                        type="email"
                        placeholder='Enter email...'
                        className='flex-1 border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all'
                    />
                    <input
                        ref={numberRef}
                        type="tel"
                        maxLength={10}
                        placeholder='Enter phone number...'
                        className='flex-1 border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all'
                    />
                    <input
                        ref={passwordRef}
                        type="password"
                        pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$'
                        placeholder='Enter password'
                        className='flex-1 border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all'
                    />
                    <button
                        type='submit'
                        className='bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg'
                    >
                        Add
                    </button>
                </div>
            </fieldset>
        </form>
    )
}

export default FormInput