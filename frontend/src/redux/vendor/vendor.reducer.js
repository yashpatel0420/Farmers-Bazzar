import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  currentVendor: {},
};

const VenodrSlice = createSlice({
  name: "vendor",
  initialState: INITIAL_STATE,
  reducers: {
    signInStart: (state, action) => {
      state.currentVendor = action.payload;
    },
    signOutStart: (state, action) => {
      state.currentVendor = {};
    },
  },
});
export const { signInStart, signOutStart } = VenodrSlice.actions;
export default VenodrSlice.reducer;
