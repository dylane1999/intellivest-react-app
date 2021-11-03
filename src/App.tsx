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
import { Backdrop, CircularProgress } from "@mui/material";

const App = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  const isLoading = useSelector((state: RootState) => state.loading.isLoading);

  console.log("token", token != null);

  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Switch>{token != "" ? <PrivateRoutes /> : <PublicRoutes />}</Switch>
    </>
  );
};

export default App;
