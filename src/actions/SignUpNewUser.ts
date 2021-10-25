import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import authSlice from '../reducers/authSlice';
import userSlice, {loginUserAction} from '../reducers/userSlice';

export interface IUserInfo {
    firstName: string;
    lastName: string;
    emailLogin: string;
    password: string;
  }

const SignUpNewUser = createAsyncThunk(
  'user/SignUpNewUser',
  async (userInfo: IUserInfo, thunkAPI) => {
    try {


      console.log("user info", userInfo)
      /** create user with API */
      const signUpResponse = await axios.put(
        'http://localhost:8080/user',
        {
          profile: {
            firstName: userInfo.firstName,
            lastName: userInfo.lastName,
            email: userInfo.emailLogin,
            login: userInfo.emailLogin,
          },
          credentials: {
            password: {value: userInfo.password},
          },
        },
      );

      console.log("created user")

      /** get Auth token for new user */

      const authTokenResponse = await axios.post(
        'http://localhost:8080/user/login',
        {
          login: userInfo.emailLogin,
          password: userInfo.password,
        },
      );

      /** perform state updates */
      const user: loginUserAction = authTokenResponse.data.user;
      const tokens = authTokenResponse.data.tokens;

      thunkAPI.dispatch(authSlice.actions.addToken(tokens.access_token));
      thunkAPI.dispatch(userSlice.actions.loginUser(user));

      console.log('User Logged In');

      return authTokenResponse.data;

    } catch (error) {
      console.log(error, 'unable to Signup user');
      alert("fail")
    }
  },
);

export default SignUpNewUser;
