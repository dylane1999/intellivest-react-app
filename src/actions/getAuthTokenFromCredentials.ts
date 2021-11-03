import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import authSlice from "../reducers/authSlice";
import loadingSlice from "../reducers/loadingSlice";
import userSlice, { loginUserAction } from "../reducers/userSlice";


const getAuthTokenFromCredentials = createAsyncThunk(
  "user/loginUserWithCredentials",
  async (userCredentials: FormData, thunkAPI) => {
    try {
      const response = await axios.post(
        "https://api.intellivest-services.com/auth/token",
        userCredentials
      );
      

      const accessToken = response.data.access_token;

      console.log(response.data);

      return accessToken;
    } catch (error) {
      let err: Error = error as Error;
      console.log(error, "unable to login user");
      alert(`unable to login ${err.message}`);
      thunkAPI.dispatch(loadingSlice.actions.setLoading(false));

    }
  }
);

export default getAuthTokenFromCredentials;



