/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import WelcomePage from "./pages/WelcomePage";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor, RootState } from "./store";
import App from "./App";
import { PersistGate } from "redux-persist/integration/react";

const AppRoot = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default AppRoot;
