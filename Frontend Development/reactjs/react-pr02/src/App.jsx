import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from './app/slices/authSlice.js';
import { addItem, removeItem } from './app/slices/cartSlice.js';
import { toggleTheme } from './app/slices/themeSlice.js';

const App = () => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(state => state.auth.loggedIn);
  const user = useSelector(state => state.auth.user);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const theme = useSelector(state => state.theme.theme);
  return (
    <main>
      <div>
        <h3>Theme: {theme}</h3>
        <button onClick={() => dispatch(toggleTheme())}>change</button>
      </div>
      <div>
        {isLoggedIn ? (
          <div>
            <h3>Welcome {user.name}</h3>
            <button onClick={() => dispatch(logout())}>logout</button>
          </div>
        ) : (
          <div>
            <h3>Please Login</h3>
            <button onClick={() => dispatch(login({ id: 1, name: 'mno' }))}>login</button>
          </div>
        )}
      </div>
      <div>
        <div>
          Total Items: {totalQuantity}
        </div>
        <div>
          <button onClick={() => dispatch(addItem({ id: 1, item: 'xyz' }))}>add item</button>
          <button onClick={() => dispatch(removeItem(1))}>removeItem</button>
        </div>
      </div>
    </main>
  )
}

export default App;