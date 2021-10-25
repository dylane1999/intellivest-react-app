import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import BackArrow from '../assets/BackArrow';
import {useHistory} from 'react-router-dom';
import ChevronArrow from './ChevronArrow';

const ArrowContainer = styled.div`
`;

const HeaderBackArrow = () => {
  const history = useHistory();

  return (
    <ArrowContainer>
      <button
        onClick={() => {
          console.log('history, go back', history.location);
          history.goBack()
        }}>
        <p>
          <ChevronArrow />
        </p>
      </button>
    </ArrowContainer>
  );
};

export default HeaderBackArrow;
