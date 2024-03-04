import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import todoReducer from "../features/todoSlice";
import userDetailReducer from "../features/userDetailSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    userDetails: userDetailReducer,
  },
});

export default store;
