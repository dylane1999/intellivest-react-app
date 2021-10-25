import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BackArrow from '../assets/BackArrow';

interface Props {
    path: string
}

const ArrowContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  padding: 26px;
`;

const GoBackArrow = (props: Props) => {
    return (
      <ArrowContainer>
        <Link
          to={props.path}
          onClick={() => console.log('pressed')}>
          <div>
            <BackArrow />
          </div>
        </Link>
      </ArrowContainer>
    );
  };

export default GoBackArrow
