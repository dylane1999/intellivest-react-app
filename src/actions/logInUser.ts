import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import authSlice from "../reducers/authSlice";
import userSlice, { loginUserAction } from "../reducers/userSlice";


const logInUser = createAsyncThunk(
  "user/loginUserWithCredentials",
  async (userId: string, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://api.intellivest-services.com/user?userId=${userId}`,
      );

      const createUserAction: loginUserAction = {
        id: response.data.id,
        firstName: response.data.firstName,
        lastName: response.data.lastName,
        email: response.data.email,
      };
      thunkAPI.dispatch(userSlice.actions.loginUser(createUserAction));
      

      const accessToken = response.data.access_token;


      thunkAPI.dispatch(authSlice.actions.addToken(accessToken));

      console.log(response.data);

      return accessToken;
    } catch (error) {
      let err: Error = error as Error;
      console.log(error, "unable to login user");
      alert(`unable to login ${err.message}`);
    }
  }
);

export default logInUser;


