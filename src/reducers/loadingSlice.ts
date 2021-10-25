import {createSlice, PayloadAction} from '@reduxjs/toolkit';
interface loadingState {
    isLoading: boolean;
}
const initialState: loadingState = {isLoading: false};
const loadingSlice = createSlice({
  name: 'loadingSlice',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});
export const {} = loadingSlice.actions;
export default loadingSlice;
