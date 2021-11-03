import React, { ReactElement, useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import ProfilePageHeader from "../components/ProfilePageHeader";
import axios from "axios";
import ProfileFollowerDisplay from "../components/ProfileFollowerDisplay";
import jwt_decode from "jwt-decode";
import authSlice from "../reducers/authSlice";
import { useSelector } from "react-redux";
import { RootState, store } from "../store";
import jwtDecode from "jwt-decode";
import IToken from "../types/tokenType";
import getUserIdFromToken from "../hooks/getUserIdFromToken";
import postSlice from "../reducers/postSlice";
import getPostsByUserId, { IPost } from "../api/getPostsByUserId";
import Post from "../components/Post";
import { nanoid } from "@reduxjs/toolkit";

const Root = styled.div`
  background-color: #323232;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 85vh;
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

const UserProfilePage = () => {
  store.dispatch(postSlice.actions.setIsWritingPost(false));
  const user = useSelector((state: RootState) => state.user);
  const token = useSelector((state: RootState) => state.auth.token);
  const decoded = getUserIdFromToken(token);
  console.log("usr", user);

  const [posts, setPosts] = useState<Array<IPost>>([]);

  useEffect(() => {
    (async () => {
      store.dispatch(postSlice.actions.setIsWritingPost(false));
      const newPosts = await getPostsByUserId(user.id, token);
      console.log(newPosts);
      const x = newPosts as Array<IPost>;
      setPosts(x);
    })();
  }, []);

  return (
    <Root>
      <ProfilePageHeader
        firstname={user.firstName}
        lastname={user.lastName}
        username={user.email}
        userId={user.id}
        profilePictureLink={null}
      />
      {/* <ProfileFollowerDisplay numberFollowers={432} numberFollwoing={234}/> */}
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

export default UserProfilePage;
