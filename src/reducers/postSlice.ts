import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface PostState {
  isWritingPost: boolean;
}

const initialState: PostState = {isWritingPost: false};

const postSlice = createSlice({
  name: 'postSlice',
  initialState,
  reducers: {
    setIsWritingPost(state, action: PayloadAction<boolean>) {
      state.isWritingPost = action.payload;
    },
  },
});

export const {setIsWritingPost} = postSlice.actions;
export default postSlice;
