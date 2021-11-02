import { configureStore } from '@reduxjs/toolkit'
import rootReducer from "./reducers"
import logger from "redux-logger"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

// get the redux dev toolds extension and redux logger 

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
  reducer: persistedReducer,
  middleware:  (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

