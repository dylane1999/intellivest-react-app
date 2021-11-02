import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Post from '../components/Post';
import BottomNav from '../components/BottomNav';

const Root = styled.div`
  background-color: #323232;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 80%;
  width: 100%;
`;

const PostsContainer = styled.div`
  background-color: #323232;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 50%;
  height: 85vh;
  padding: 16px;
  overflow-y: scroll;
`;



const HomePage = () => {

  return (
    <Root>
      <PostsContainer>
        
        <Post
          posterId={'qweoh83ubhdwe2'}
          postContent="content"
          postTime="8h"
          posterName="dylan edwards"
        />
      </PostsContainer>
    </Root>
  );
};

export default HomePage;
