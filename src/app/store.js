import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import todoReducer from "../features/todoSlice";
import userDetailReducer from "../features/userDetailSlice";
import dataSlice from "../features/dataSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    userDetails: userDetailReducer,
    data: dataSlice,
  },
});

export default store;
