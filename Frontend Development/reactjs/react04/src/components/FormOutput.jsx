import React, { useContext, useState, useEffect } from 'react'
import AppContext from '../context/appContext'

const FormOutput = () => {
    const { data, deleteData } = useContext(AppContext);
    const [isVisible, setVisible] = useState([]);
    function handleVisiblity(index) {
        setVisible((data) => data.map((value, idx) => (idx == index ? !value : value)));
    }
    useEffect(() => {
        setVisible(Array(data.length).fill(false));
    }, [data]);
    return (
        <div className='space-y-3'>
            {data.length === 0 ? (
                <p className='text-center text-gray-400 py-8'>No data yet. Add one above!</p>
            ) : (
                data.map((data, index) => (
                    <fieldset key={index} className='bg-gray-50 border border-gray-300 rounded-lg p-4 hover:shadow-md transition-shadow duration-200'>
                        <legend className='text-lg font-semibold text-gray-700 px-2'>Data {index + 1}</legend>
                        <div className='flex justify-between items-center gap-4'>
                            <div className='flex-1 space-y-2'>
                                <div className='flex items-center gap-2'>
                                    <span className='text-sm font-semibold text-gray-600 w-20'>Email:</span>
                                    <span className='text-sm text-gray-800'>{data.email}</span>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <span className='text-sm font-semibold text-gray-600 w-20'>number:</span>
                                    <span className='text-sm text-gray-800'>{data.number}</span>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <span className='text-sm font-semibold text-gray-600 w-20'>Password:</span>
                                    {isVisible[index] ? (
                                        <span className='text-sm text-gray-800 font-mono'>{data.password}</span>
                                    ) : (
                                        <span className='text-sm text-gray-800 font-mono'>{'*'.repeat(data.password.length)}</span>
                                    )}
                                    <button
                                        onClick={() => handleVisiblity(index)}
                                        className='border border-gray-300 rounded-lg px-2 text-gray-500'
                                    >
                                        {isVisible[index] ? "hide" : "show"}
                                    </button>
                                </div>
                            </div>
                            <button
                                onClick={() => deleteData(index)}
                                className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors duration-200'
                            >
                                Delete
                            </button>
                        </div>
                    </ fieldset>
                ))
            )}
        </div>
    )
}

export default React.memo(FormOutput)