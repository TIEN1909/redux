import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [
      {
        title: "",
        desc: "",
        tags: 0,
        pendding: false,
        error: false,
      },
    ],
  },
  reducers: {
    createBegin: (state) => {
      state.posts.pending = true;
    },
    createError: (state) => {
      state.posts.pending = false;
      state.posts.error = true;
    },
    createSuccess: (state, action) => {
      state.pending = false;
      state.error = false;
      state.posts = [...state.posts, action.payload];
    },
  },
});

export const { createBegin, createError, createSuccess } = postSlice.actions;
export default postSlice.reducer;
