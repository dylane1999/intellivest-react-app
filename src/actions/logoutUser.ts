import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import authSlice from "../reducers/authSlice";
import userSlice, { loginUserAction } from "../reducers/userSlice";


const logoutUser = createAsyncThunk(
  "user/logoutUser",
  async (userId: string | null, thunkAPI) => {
    try {
        console.log("attempting to logout user: ", userId)
      thunkAPI.dispatch(userSlice.actions.logoutUser());
      thunkAPI.dispatch(authSlice.actions.deleteToken());

    } catch (error) {
      let err: Error = error as Error;
      console.log(error, "unable to logout user");
      alert(`unable to logout ${err.message}`);
    }
  }
);

export default logoutUser;


