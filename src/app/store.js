import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../features/counterSlice";
import todoReducer from "../features/todoSlice";
import dataSlice from "../features/dataSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,

    data: dataSlice,
  },
});

export default store;
