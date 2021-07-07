import { configureStore } from "@reduxjs/toolkit";
import global from "./globalSlice";
import personManager from "features/PersonManager/personManagerSlice";

const rootReducer = {
  global,
  personManager,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
