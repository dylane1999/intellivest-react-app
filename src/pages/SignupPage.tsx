import React, {useState} from 'react';
import styled from 'styled-components';
import SignUpNewUser, {IUserInfo} from '../actions/SignUpNewUser';
import GoBackArrow from '../components/GoBackArrow';
import TextInput from '../components/TextInput';
import store from '../store';

const Root = styled.div`
  background-color: #323232;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
`;

const Heading = styled.div`
  color: #ffffff;
  font-size: 36px;
  /* text-decoration: underline; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-bottom: 36px;
`;
const SubHeading = styled.div`
  color: #ffffff;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const Spacing = styled.div`
  padding: 6px;
`;

const Line = styled.div`
  position: absolute;
  width: 260px;
  height: 1px;
  border: 1px solid #f9f9f9;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-right: 60px;
`;

const SignUpButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: rgba(85, 89, 175, 0.79);
  width: 322px;
  height: 69px;
  border-radius: 5px;
  margin-top: 15%;
`;
const ButtonText = styled.div`
  font-size: 16px;
  color: white;
`;

const SignupPage = () => {
  const handleSignUp = (
    firstName: string,
    lastName: string,
    emailLogin: string,
    password: string,
  ) => {
    const userInfo: IUserInfo = {
      firstName: firstName,
      lastName: lastName,
      emailLogin: emailLogin,
      password: password,
    };

    store.dispatch(SignUpNewUser(userInfo));
  };

  const [emailLogin, changeEmailLogin] = useState('');
  const [password, changePassword] = useState('');

  const [firstName, changeFirstName] = useState('');
  const [lastName, changeLastName] = useState('');

  return (
    <Root>
      <GoBackArrow path={'/'} />
      <TextWrapper>
        <Heading>Create Account</Heading>
        <Spacing />
        <Line />
        <SubHeading>Welcome to Intellivest!</SubHeading>
      </TextWrapper>
      <Spacing />

      <TextInput
        value={firstName}
        onChange={changeFirstName}
        placeholder="First Name"
      />

      <TextInput
        value={lastName}
        onChange={changeLastName}
        placeholder="Last Name"
      />
      <TextInput
        value={emailLogin}
        onChange={changeEmailLogin}
        placeholder="Email"
      />

      <TextInput
        value={password}
        onChange={changePassword}
        placeholder="Password"
      />

      <SignUpButtonWrapper
        onClick={() => handleSignUp(firstName, lastName, emailLogin, password)}>
        <ButtonText>Sign Up</ButtonText>
      </SignUpButtonWrapper>
    </Root>
  );
};

export default SignupPage;
