import React, { useState } from "react";
import styled from "styled-components";
import GoBackArrow from "../components/GoBackArrow";
import TextInput from "../components/TextInput";
import { store } from "../store";
import TextField from "@mui/material/TextField";
import { Button, withStyles } from "@mui/material";
import "../index.css";
import loadingSlice from "../reducers/loadingSlice";
import getAuthTokenFromCredentials from "../actions/getAuthTokenFromCredentials";
import authSlice from "../reducers/authSlice";
import userSlice, { loginUserAction } from "../reducers/userSlice";
import axios from "axios";
import jwtDecode from "jwt-decode";
import getUserIdFromToken from "../hooks/getUserIdFromToken";
import getUserById from "../api/getUserById";

const Root = styled.div`
  background-color: #323232;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
`;

const Heading = styled.div`
  color: #ffffff;
  font-size: 2.875rem;
  /* text-decoration: underline; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-bottom: 36px;

  @media (max-width: 1700px) {
    font-size: 2rem;
  }
`;
const SubHeading = styled.div`
  color: #ffffff;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const Spacing = styled.div`
  padding: 6px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 50vh;
  width: 40vh;
  background-color: #494949;
  border-radius: 5px;
  z-index: 0;
  padding: 16px;
`;

const Line = styled.div`
  position: absolute;
  width: 300px;
  height: 1px;
  border: 1px solid #f9f9f9;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoginButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: rgba(85, 89, 175, 0.79);
  width: 320px;
  height: 69px;
  border-radius: 5px;
  /* everything below 360px width has this lower button width */
  @media (max-width: 360px) {
    width: 250px;
  }
`;
const ButtonText = styled.div`
  font-size: 16px;
  color: white;
`;

const StyledTextField = styled(TextField)`
  color: white;

  background-color: white;
`;

const loginUser = async (userLogin: string, userPassword: string) => {
  const loginForm = new FormData();
  loginForm.append("username", userLogin);
  loginForm.append("password", userPassword);

  console.log("call login user");
  store.dispatch(loadingSlice.actions.setLoading(true));
  const response = await store.dispatch(getAuthTokenFromCredentials(loginForm));

  const token: string = response.payload as string;
  const user = await getUserById(token);
  store.dispatch(userSlice.actions.loginUser(user));
  store.dispatch(authSlice.actions.addToken(token));
  store.dispatch(loadingSlice.actions.setLoading(false));
};


const LoginPage = () => {
  const [emailLogin, changeEmail] = useState("");
  const [password, changePassword] = useState("");

  const styles = {
    input: {
      color: "#FFFFFF",
    },
  };

  return (
    <Root>
      <Spacing />

      <Card>
        <TextWrapper>
          <Heading>Log In</Heading>
          <Spacing />
          <Spacing />

          <Spacing />

          <Line />
        </TextWrapper>
        <TextInput
          value={emailLogin}
          setValue={changeEmail}
          label="Email Login"
          width="320px"
          height="100px"
          padding="6px"
          type="input"
        />

        <TextInput
          value={password}
          setValue={changePassword}
          label="Password"
          width="320px"
          height="100px"
          padding="6px"
          type="password"
        />

        <Button
          onClick={() => loginUser(emailLogin, password)}
          variant="contained"
          className="actionButton"
          sx={{
            backgroundColor: "#5559af",
          }}
        >
          Log In
        </Button>
      </Card>
    </Root>
  );
};

export default LoginPage;
