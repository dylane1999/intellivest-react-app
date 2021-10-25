import { configureStore } from '@reduxjs/toolkit'
import rootReducer from "./reducers"
import logger from "redux-logger"

// get the redux dev toolds extension and redux logger 

const store = configureStore({
  reducer: rootReducer,
  middleware:  (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export type RootState = ReturnType<typeof store.getState>

export default store