import React from 'react'
import Counter from './components/Counter';
import TodoApp from './components/TodoApp';

const App = () => {
  return (
    <div className='flex justify-center mx-auto p-4'>
      {/* <Todo /> */}
      {/* <Counter /> */}
      <TodoApp />
    </div>
  )
}

export default App;