import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Array of products
    totalQuantity: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      // Check if item already exists
      const existingItem = state.items.find((item) => item.id === newItem.id);
      
      if (!existingItem) {
        state.items.push({ ...newItem, quantity: 1 });
        state.totalQuantity++;
      } else {
        existingItem.quantity++;
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
      state.totalQuantity--;
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
    },
    
    // inside reducers: { ... }
decreaseQuantity: (state, action) => {
  const item = state.items.find((i) => i.id === action.payload);
  if (item.quantity > 1) {
    item.quantity--;
  } else {
    // If quantity is 1 and they click minus, remove it
    state.items = state.items.filter((i) => i.id !== action.payload);
    state.totalQuantity--;
  }
},
  }
});

export const { addToCart, removeFromCart, clearCart ,decreaseQuantity} = cartSlice.actions;
export default cartSlice.reducer;
