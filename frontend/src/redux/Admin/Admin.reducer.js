import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  admin: {},
};

const AdminSlice = createSlice({
  name: "admin",
  initialState: INITIAL_STATE,
  reducers: {
    AdminSignInStart: (state, action) => {
      state.admin = action.payload;
    },
    AdminSignOutStart: (state) => {
      state.admin = {};
    },
  },
});
export const { AdminSignInStart, AdminSignOutStart } = AdminSlice.actions;
export default AdminSlice.reducer;
