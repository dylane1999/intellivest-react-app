import React from 'react';
import styled from 'styled-components';

interface IProfileFollowerDisplayProps {
  numberFollwoing: number;
  numberFollowers: number;
}

const FollowerAmountsRoot = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 18px;
`;

const FollwerAmountText = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: #ffffff;
`;

const ProfileFollowerDisplay = (props: IProfileFollowerDisplayProps) => {
  return (
    <FollowerAmountsRoot>
      <FollwerAmountText>Following {props.numberFollwoing}</FollwerAmountText>
      <FollwerAmountText>Followers {props.numberFollowers}</FollwerAmountText>
    </FollowerAmountsRoot>
  );
};

export default ProfileFollowerDisplay;
