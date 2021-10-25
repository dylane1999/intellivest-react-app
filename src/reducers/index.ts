import { combineReducers } from "@reduxjs/toolkit"
import authSlice from "./authSlice"
import loadingSlice from "./loadingSlice"
import postSlice from "./postSlice"
import userSlice from "./userSlice"

const rootReducer = combineReducers({
    auth: authSlice.reducer,
    user: userSlice.reducer,
    post: postSlice.reducer,
    loading: loadingSlice.reducer,
})

export default rootReducer