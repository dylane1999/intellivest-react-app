import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../store";
import IntellivestLogo from "../assets/IntellivestLogo";
import { Link } from "react-router-dom";
import BackArrow from "../assets/BackArrow";
import MySlider from "../components/MySlider";
import { Button } from "@mui/material";

const Root = styled.div`
  background-color: #323232;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 70%;
  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;

const LogInButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: rgba(146, 146, 146, 0.5);
  width: 160px;
  height: 75px;
  border: none;
  border-top-left-radius: 5;
  border-bottom-left-radius: 5;
`;

const SignUpButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: rgba(85, 89, 175, 0.79);
  border-top-right-radius: 5;
  border-bottom-right-radius: 5;
  width: 160px;
  height: 75px;
  border: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const ButtonText = styled.div`
  font-size: 16px;
  color: white;
  text-decoration: none;
`;


const Spacing = styled.div`
  padding: 6px;
`;

interface Props {}

const WelcomePage = (props: Props) => {
  const state = useSelector((state: RootState) => state.auth);

  return (
    <Root>
      <WelcomeContainer>
        <IntellivestLogo />
        <ButtonContainer>
          <StyledLink to="/login">
          <Button
              variant="contained"
              sx={{
                backgroundColor: "#858585",
                width: "160px",
                height: "80px",
              }}
            >
              Log In
            </Button>
          </StyledLink>
          <Spacing/>
          <StyledLink to="/signup">
          <Button
              variant="contained"
              sx={{
                backgroundColor: "#5559af",
                width: "160px",
                height: "80px",
              }}
            >
              Sign Up
            </Button>
          </StyledLink>
        </ButtonContainer>
      </WelcomeContainer>
    </Root>
  );
};

export default WelcomePage;
