import React, { useState } from 'react'

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");
    function handleSubmit() {
        setTodos([...todos, input]);
        setInput("");
    }
    function handleChange(e) {
        setInput(e.target.value);
    }
    function handleDelete() {

    }
    return (
        <>
            <div>
                <label htmlFor="">To-do: </label>
                <input type="text" value={input} onChange={handleChange} />
            </div>
            <div>
                <button onClick={handleSubmit}>Add</button>
            </div>
            {todos.map((item, index) => {
                return (
                    <div key={index}>
                        <span>{item}</span>
                        <button onClick={handleDelete}>Delete</button>
                    </div>
                )
            })}
        </>
    )
}

export default TodoApp;