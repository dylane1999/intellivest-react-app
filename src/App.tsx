/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import WelcomePage from "./pages/WelcomePage";
import { Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import { store, RootState } from "./store";

import { PrivateRoutes } from "./routing/PrivateRoutes";
import PublicRoutes from "./routing/PublicRoutes";

const App = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  console.log("token", token != null);

  return (
    <>
      <Switch>{token != '' ? <PrivateRoutes /> : <PublicRoutes />}</Switch>
    </>
  );
};

export default App;
