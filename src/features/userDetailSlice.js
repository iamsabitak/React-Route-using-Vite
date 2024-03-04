import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { users: [], loading: false, error: null };

export const createUser = createAsyncThunk(
  "showUser",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        "https://65e5929dd7f0758a76e6b7a4.mockapi.io/user",
        data
      );
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// export const showUser = createAsyncThunk(
//   "showUser",
//   async ({ rejectWithValue }) => {
//     try {
//       const res = await axios.get(
//         "https://65e5929dd7f0758a76e6b7a4.mockapi.io/user"
//       );
//       return res;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

const userDetailSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {},
  extraReducers: {
    [createUser.pending]: (state) => {
      state.loading = true;
    },
    [createUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.users.push(action.payload);
    },
    [createUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    // [showUser.pending]: (state) => {
    //   state.loading = true;
    // },
    // [showUser.fulfilled]: (state, action) => {
    //   state.loading = false;
    //   state.users = action.payload;
    // },
    // [showUser.rejected]: (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload.message;
    // },
  },
});

export default userDetailSlice.extraReducers;
