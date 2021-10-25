import React, {ReactElement} from 'react';
import styled from 'styled-components';
import {useParams} from 'react-router-dom';
import ProfilePageHeader from '../components/ProfilePageHeader';
import axios from 'axios';
import ProfileFollowerDisplay from '../components/ProfileFollowerDisplay';

const Root = styled.div`
  background-color: #323232;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 80%;
  width: 100%;
`;

type idParams = {
    id: string
}

const getUserInfo = async (userId: string) => {

  const response = await axios.get(`http:localhost:8080/user?id=${userId}`)
  
}


const UserProfilePage = () => {
  const userIdParams: idParams = useParams();


  return (
    <Root>
      <ProfilePageHeader firstname="Dylan" lastname="Edwards" username="dylanedwards290" userId={userIdParams.id} profilePictureLink={null}/>
      <ProfileFollowerDisplay numberFollowers={432} numberFollwoing={234}/>
      <div> USER PROFILE PAGE {userIdParams.id}</div>
    </Root>
  );
};

export default UserProfilePage;
