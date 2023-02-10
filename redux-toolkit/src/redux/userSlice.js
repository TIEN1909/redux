import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "Deio",
    age: "21",
    about: "I'm a Front-end Developer",
    avaUrl:
      "https://preview.redd.it/5es1lne1du261.png?width=640&crop=smart&auto=webp&s=e6eb0ee5710710000e4fbace119112de63324a38",
    theme: "rgb(237 81 19)",
    pending: false, // chờ xữ lý
    error: false, // check có lỗi hay k
  },
  reducers: {
    updateBegin: (state) => {
      state.pending = true;
    },
    updateError: (state) => {
      state.pending = false;
      state.error = true;
    },
    updateSuccess: (state, action) => {
      state.pending = false;
      state.error = false;
      state.name = action.payload.name;
      state.age = action.payload.age;
      state.about = action.payload.about;
      state.avaUrl = action.payload.avaUrl;
      state.theme = action.payload.theme;
    },
  },
});
export const { updateBegin, updateError, updateSuccess } = userSlice.actions;
export default userSlice.reducer;
