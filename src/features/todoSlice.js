import { createSlice, nanoid } from "@reduxjs/toolkit";

// const initialState = { todos: [{ text: "Hello", id: 1 }] };
// const initialState = { todos: [] };
const initialState = [];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      // state.todos.push(todo);
      state.push(todo);
    },
    removeTodo: (state, action) => {
      state = state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
