import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  cart: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    addItemToCart: (state, action) => {
      const ind = state.cart.findIndex(
        (item) => item._id === action.payload._id
      );

      if (ind >= 0) {
        state.cart[ind].quantity += action.payload.quantity;
      } else {
        state.cart.push(action.payload);
      }
    },
    removeItemFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload);
    },
    IncreseQuntityOfItem: (state, action) => {
      state.cart = state.cart.map((item) =>
        item._id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    },
    DecreaseQuntityOfItem: (state, action) => {
      const index = state.cart.findIndex((item) => item._id === action.payload);
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity -= 1;
      }
      state.cart = state.cart.filter((item) => item._id !== action.payload);
    },
    emptyCart: (state) => {
      state.cart = [];
    },
    onChangeQuantity: (state, action) => {
      state.cart = state.cart.map((item) =>
        item._id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
    },
  },
});
export const {
  addItemToCart,
  removeItemFromCart,
  IncreseQuntityOfItem,
  DecreaseQuntityOfItem,
  emptyCart,
  onChangeQuantity,
} = CartSlice.actions;
export default CartSlice.reducer;
