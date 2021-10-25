import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface userState {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface loginUserAction {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

const initialState = {
  id: "fasdfdaf4332",
  firstName: null,
  lastName: null,
  email: null,
} as userState;

const userSlice = createSlice({
  name: 'userState',
  initialState,
  reducers: {
    loginUser(state, action: PayloadAction<loginUserAction>) {
      state.id = action.payload.id;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
    },
    logoutUser(state) {
      state.id = null;
      state.firstName = null;
      state.lastName = null;
      state.email = null;
    },
  },
});

export const {loginUser, logoutUser} = userSlice.actions;
export default userSlice;
