import React, { useState } from "react";
import styled from "styled-components";
import loginUserWithCredentials from "../actions/getAuthTokenFromCredentials";
import GoBackArrow from "../components/GoBackArrow";
import TextInput from "../components/TextInput";
import { store } from "../store";
import TextField from "@mui/material/TextField";
import { Button, withStyles } from "@mui/material";
import TestComponent from "../components/TextInput";
import "../index.css";
import axios from "axios";
import loadingSlice from "../reducers/loadingSlice";
import getAuthTokenFromCredentials from "../actions/getAuthTokenFromCredentials";
import userSlice from "../reducers/userSlice";
import authSlice from "../reducers/authSlice";
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
  height: 65vh;
  width: 50vh;
  background-color: #494949;
  border-radius: 5px;
  z-index: 0;
  padding: 16px;
  @media (max-width: 400px) {
    width: 40vh;
    height: 85vh;
  }

  @media (max-width: 350px) {
    width: 50vh;
    height: 85vh;
  }
`;

const Line = styled.div`
  position: absolute;
  width: 300px;
  height: 1px;
  border: 1px solid #f9f9f9;

  @media (max-width: 500px) {
    display: none;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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

const SignupPage = () => {
  interface IUser {
    id: "00u2hee8oizHPciZV5d7";
    firstName: "first_name";
    lastName: "last_name";
    email: "fdfdfdfdfdff-e926-4c50-bca8-6a3123d4b463@gmail.com";
  }

  const signUpUser = async (
    userLogin: string,
    userPassword: string,
    firstName: string,
    lastName: string
  ) => {
    try {
      console.log("call create user");
      const response = await axios.put(
        "https://api.intellivest-services.com/user",
        {
          email: userLogin,
          firstName: firstName,
          lastName: lastName,
          password: userPassword,
        }
      );

      const newUser: IUser = response.data;

      const loginForm = new FormData();
      loginForm.append("username", userLogin);
      loginForm.append("password", userPassword);

      console.log("call login user");
      store.dispatch(loadingSlice.actions.setLoading(true));
      const tokenRes = await store.dispatch(
        getAuthTokenFromCredentials(loginForm)
      );

      const token: string = tokenRes.payload as string;
      const user = await getUserById(token);
      store.dispatch(userSlice.actions.loginUser(user));
      store.dispatch(authSlice.actions.addToken(token));
      store.dispatch(loadingSlice.actions.setLoading(false));
    } catch (error) {
      alert("failed to create a new user");
    }
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
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
          <Heading>Create an Account</Heading>
          <Spacing />
          <Line />
          <SubHeading>Welcome to Intellivest!</SubHeading>
        </TextWrapper>
        <Spacing />
        <Spacing />

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
          value={firstName}
          setValue={setFirstName}
          label="First Name"
          width="320px"
          height="100px"
          padding="6px"
          type="input"
        />

        <TextInput
          value={lastName}
          setValue={setLastName}
          label="Last Name"
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
          onClick={() => signUpUser(emailLogin, password, firstName, lastName)}
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

export default SignupPage;
