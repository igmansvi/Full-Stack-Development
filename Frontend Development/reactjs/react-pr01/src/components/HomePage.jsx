import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../app/slices/couterSlice';

const HomePage = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>add 1</button>
      <button onClick={() => dispatch(decrement())}>sub 1</button>
    </>
  )
}

export default HomePage