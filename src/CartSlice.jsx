
import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const { name, item, image, cost } = action.payload;
      const existingItem = state.items.find((item) => item.name === item.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, item, image, cost, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.name !== item.name);
    },
    updateQuantity: (state, action) => {
     const { name, quantity } = action.payload;
    const itemToUpdate = state.items.find(item => item.name === name);
    if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
    }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;


