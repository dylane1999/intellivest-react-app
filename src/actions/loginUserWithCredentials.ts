import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import authSlice from '../reducers/authSlice';
import userSlice, {loginUserAction} from '../reducers/userSlice';

interface userCredentials {
  login: string;
  password: string;
}

const loginUserWithCredentials = createAsyncThunk(
  'user/loginUserWithCredentials',
  async (userCredentials: userCredentials, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:8080/user/login', {
        login: userCredentials.login,
        password: userCredentials.password,
      });

      const user = response.data.user;
      const tokens = response.data.tokens;

      const createUserAction: loginUserAction = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      };

      thunkAPI.dispatch(authSlice.actions.addToken(tokens.access_token));
      thunkAPI.dispatch(userSlice.actions.loginUser(createUserAction));

      console.log(response.data);

      return response.data;
    } catch (error) {
      console.log(error, 'unable to login user');
      alert("unable to login")
    }
  },
);

export default loginUserWithCredentials;
