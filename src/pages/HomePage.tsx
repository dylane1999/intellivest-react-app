import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Post from "../components/Post";
import BottomNav from "../components/BottomNav";
import getPostsByUserId, { IPost, IUserPosts } from "../api/getPostsByUserId";
import { RootState, store } from "../store";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import postSlice from "../reducers/postSlice";

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

  @media (max-width: 500px) {
    height: 80vh;
    width: 80%;
  }
`;

const HomePage = () => {
  const user = useSelector((state: RootState) => state.user);
  const token = useSelector((state: RootState) => state.auth.token);

  const [posts, setPosts] = useState<Array<IPost>>([]);

  useEffect(() => {
    (async () => {
      store.dispatch(postSlice.actions.setIsWritingPost(false));
      const newPosts = await getPostsByUserId(user.id, token);
      console.log(newPosts)
      const x = newPosts as Array<IPost>;
      setPosts(x);
    })();
  }, []);
  return (
    <Root>
      <PostsContainer>
        {posts.map((post) => {
          return (
            <Post
              key={nanoid()}
              posterId={post.posterId}
              postContent={post.postContent}
              postTime={post.timeOfPost}
              posterName={post.postTitle}
            />
          );
        })}
      </PostsContainer>
    </Root>
  );
};

export default HomePage;
