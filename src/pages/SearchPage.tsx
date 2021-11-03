import React from 'react'
import styled from 'styled-components'
import postSlice from '../reducers/postSlice';
import { store } from '../store';

const Root = styled.div`
  background-color: #323232;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 85vh;
  width: 100%;

  @media (max-width: 500px) {
    height: 81vh;

  }


`;

const SearchPage = () => {
    store.dispatch(postSlice.actions.setIsWritingPost(false));

    return (
        <Root>
            WIP
        </Root>
    )
}

export default SearchPage
