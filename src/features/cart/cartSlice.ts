import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type Pizza = {
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

type Cart = {
  cart: Pizza[]
}

const initialState: Cart = {
  cart: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Pizza>) {
      state.cart.push(action.payload);
    },
    removeItem(state, action: PayloadAction<string>) {
      state.cart = state.cart.filter(item => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action: PayloadAction<string>) {
      const item = state.cart.find(item => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action: PayloadAction<string>) {
      const item = state.cart.find(item => item.pizzaId === action.payload);
      if (item.quantity === 1) return;
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    clearCart(state) {
      state.cart = [];
    },
  }
});

export const { addItem, removeItem, increaseItemQuantity, decreaseItemQuantity, clearCart } = cartSlice.actions;

export const getTotalCartQuantity = (state) => state.cart.cart.reduce((acc, item) => item.quantity + acc, 0);
export const getCurrentQuantityById = (id: number) => (state) => state.cart.cart.find(item => item.pizzaId === id)?.quantity ?? 0;
export const getTotalCartPrice = (state) => state.cart.cart.reduce((acc, item) => item.totalPrice + acc, 0);

export default cartSlice.reducer;
