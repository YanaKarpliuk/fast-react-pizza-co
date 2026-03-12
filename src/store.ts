import { configureStore } from '@reduxjs/toolkit';
// import { useDispatch } from 'react-redux'
import userReducer from './features/user/userSlice.ts';
import cartReducer from './features/cart/cartSlice.ts';
import { useDispatch } from 'react-redux';

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer
  }
});

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export default store;
