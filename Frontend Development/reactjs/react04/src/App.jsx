import { useEffect, useReducer } from 'react';
import Form from './components/Form';
import AppContext from './context/appContext';

function reducer(state, action) {
  switch (action.type) {
    case 'SET':
      return action.payload
    case "ADD":
      return [...state, action.payload]
    case "DELETE":
      return state.filter((_, index) => index !== action.payload)
    default:
      return state
  }
}

const App = () => {
  const [data, dispatch] = useReducer(reducer, []);
  const apiUrl = 'https://69302966778bbf9e007019c4.mockapi.io/users';

  useEffect(() => {
    fetch(apiUrl).then(response => response.json()).then(data => setData(data));
  },[])

  function setData(inputData) {
    dispatch({type: 'SET', payload: inputData})
  }

  function addData(inputData) {
    dispatch({ type: 'ADD', payload: inputData });
  }

  function deleteData(index) {
    dispatch({ type: 'DELETE', payload: index });
  }

  return (
    <AppContext.Provider value={{ data, addData, deleteData }}>
      <div className='min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 py-8'>
        <Form />
      </div>
    </AppContext.Provider>
  )
}

export default App