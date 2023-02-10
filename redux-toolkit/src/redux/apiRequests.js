// handle requests
import axios from "axios";
import { updateBegin, updateError, updateSuccess } from "./userSlice";

export const updateUser = async (user, dispatch) => {
  dispatch(updateBegin());

  try {
    const res = await axios.post("/v1/update", user);
    dispatch(updateSuccess(res.data));
  } catch (err) {
    dispatch(updateError());
  }
};
