import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { amount: 10 },
  reducers: {
    addCounter: (state, action) => {
      state.amount = state.amount + action.payload;
    },
    deleteCounter: (state, action) => {
      state.amount = state.amount - action.payload;
    },
  },
});

export const { addCounter, deleteCounter } = counterSlice.actions;
export default counterSlice.reducer;
