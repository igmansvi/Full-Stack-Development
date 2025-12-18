import React, { useRef } from 'react'

const StudentForm = ({addData}) => {
    const inputNameRef = useRef();
    const inputEmailRef = useRef();
    const inputCourseRef = useRef();
    const inputNumberRef = useRef();
    function handleAddData() {
        if(!inputNameRef.current.value || !inputEmailRef.current.value) return;
        let newUser = {
            username : inputNameRef.current.value,
            useremail : inputEmailRef.current.value,
            usercourse : inputCourseRef.current.value,
            usernumber: inputNumberRef.current.value,
        }
        addData(newUser);
        inputNameRef.current.value = '';
        inputEmailRef.current.value = '';
        inputNumberRef.current.value = '';
    }
  return (
    <div className='flex flex-col justify-center border p-4 rounded-sm w-sm mx-auto mt-8 space-y-4'>
        <div>
            <label htmlFor="">Name: </label>
            <input ref={inputNameRef} type="text" placeholder='enter your name' required className='border border-gray-300 p-2 w-full rounded-sm'/>
        </div>
        <div>
            <label htmlFor="">Email: </label>
            <input ref={inputEmailRef} type="email" placeholder='enter your email' required className='border border-gray-300 p-2 w-full rounded-sm'/>
        </div>
        <div>
            <label htmlFor="">Course: </label>
            <select ref={inputCourseRef} name="" id="" className='border border-gray-300 p-2 w-full rounded-sm'>
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="Full-Stack" selected>Full-Stack</option>
                <option value="UI/UX">UI/UX</option>
            </select>
        </div>
        <div>
            <label htmlFor="">Number: </label>
            <input ref={inputNumberRef} type="text" placeholder='enter your number' required className='border border-gray-300 p-2 w-full rounded-sm' maxLength={10}/>
        </div>
        <div>
            <button onClick={handleAddData} className='bg-blue-300 w-full px-8 py-2 text-white hover:bg-blue-500 rounded-sm'>Add</button>
        </div>
    </div>
  )
}

export default StudentForm