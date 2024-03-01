import { configureStore } from "@reduxjs/toolkit";
import conuterReducer from "./counterSlice";

const store = configureStore({
  reducer: {
    counter: conuterReducer,
  },
});

export default store;
