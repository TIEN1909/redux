import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./postSlice";
import useReducerr from "./userSlice";

export default configureStore({
  reducer: {
    user: useReducerr,
    post: postReducer,
  },
});
