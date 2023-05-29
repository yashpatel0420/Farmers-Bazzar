import { configureStore } from "@reduxjs/toolkit";
import sessionStorage from "reduxjs-toolkit-persist/lib/storage/session";
// import sessionStorage from "redux-persist/lib/storage";
import logger from "redux-logger";
import VenodrReducer from "./vendor/vendor.reducer";
import CartReducer from "./cart/cart.reducer";
import { persistCombineReducers, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import customerReducer from "./customer/customer.reducer";
import AdminReducer from "./Admin/Admin.reducer";

const persistConfig = {
  key: "root",
  storage: sessionStorage,
};

const combinReducer = {
  vendor: VenodrReducer,
  cart: CartReducer,
  customer: customerReducer,
  admin: AdminReducer,
};

const applyMiddleware = [logger, thunk];
export const store = configureStore({
  reducer: persistCombineReducers(persistConfig, combinReducer),
  middleware: applyMiddleware,
});

export const persistedStore = persistStore(store);
