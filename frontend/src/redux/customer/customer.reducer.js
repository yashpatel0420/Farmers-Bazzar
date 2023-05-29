import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  customer: {},
  order: {},
};

const CustomerSlice = createSlice({
  name: "customer",
  initialState: INITIAL_STATE,
  reducers: {
    customerSignInStart: (state, action) => {
      state.customer = action.payload;
    },
    customerSignOutStart: (state, action) => {
      state.customer = {};
    },
    setOrder: (state, action) => {
      state.order = action.payload;
    },
    clearOrder: (state) => {
      state.order = {};
    },
  },
});
export const {
  customerSignInStart,
  customerSignOutStart,
  setOrder,
  clearOrder,
} = CustomerSlice.actions;
export default CustomerSlice.reducer;
