import React from 'react';
import styled from 'styled-components';
import getProfilePictureHook from '../hooks/getProfilePictureHook';
import Avatar from './Avatar';

/**
 * @interface profilePictureLink
 * @field  profilePictureLink: string | null;
 * @field userId: string;
 */
interface IProfilePageHeader {
  profilePictureLink: string | null;
  firstname: string;
  lastname: string;
  username: string;
  userId: string;
}

const HeaderRoot = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 16px;
`;

const HeaderUsernameText = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  /* identical to box height */
  color: #ffffff;
  padding-bottom: 3%;

`;

const HeaderNameText = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  /* identical to box height */
  color: #ffffff;
`;

const HeaderTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 16px;
  color: #ffffff;
  padding-left: 10%;
`;

const ProfilePageHeader = (props: IProfilePageHeader) => {
  const profilePic: string = getProfilePictureHook(props.profilePictureLink);

  return (
    <HeaderRoot>
      <Avatar imageUrl={profilePic} userId={props.userId} size="85px"/>
      <HeaderTextWrapper>
        <HeaderUsernameText>
          {props.firstname} {props.lastname}
        </HeaderUsernameText>
        <HeaderNameText>@{props.username}</HeaderNameText>
      </HeaderTextWrapper>
    </HeaderRoot>
  );
};

export default ProfilePageHeader;
