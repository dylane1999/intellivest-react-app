import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface AuthState {
  token: string;
}

const initialState = {token: ""} as AuthState;

const authSlice = createSlice({
  name: 'authToken',
  initialState,
  reducers: {
    addToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    deleteToken(state) {
      state.token= "";
    }
  },
});

export const {addToken, deleteToken } = authSlice.actions;
export default authSlice
