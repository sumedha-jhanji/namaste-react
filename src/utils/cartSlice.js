import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    //here addItem is action and function against is reducer function
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const index = state.items.findIndex((x) => x.card.info.id === action.payload.card.info.id);
      const newItems = [
        ...state.items.splice(0, index),
        ...state.items.splice(index + 1),
      ];
      state.items = newItems;
    },
    clearCart: (state) => {
     // state.items.length = 0;
     return { items: [] }; // this new object will be replaced inside originalState = { items: [] }
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
