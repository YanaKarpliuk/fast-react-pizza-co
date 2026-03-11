import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice.js';
import cartReducer from './features/cart/cartSlice.ts';

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer
  }
});

export default store;
