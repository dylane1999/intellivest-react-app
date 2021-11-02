import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import getProfilePictureHook from "../hooks/getProfilePictureHook";
import Avatar from "./Avatar";

/**
 * @interface IPostProps
 * @field postTime: string;
 * @field posterName: string;
 * @field postContent: string;
 * @field posterAvatar: string;
 *
 */
interface IPostProps {
  postTime: string;
  posterName: string;
  postContent: string;
  posterAvatar?: string;
  posterId: string;
}

const PostRoot = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  padding: 16px;
  border-top: 1px solid #a2a2a2;
  border-bottom: 1px solid #a2a2a2;
`;

const PostAuthorText = styled.div`
  font-size: 16px;
  color: #ffffff;
  padding-bottom: 16px;
`;

const PostContentText = styled.div`
  font-size: 12px;
  color: #ffffff;
`;

const PostTextWrapper = styled.div`
  padding-left: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

/**
 * post component
 * @param props - the post props
 * @returns - jsx for post
 */
const Post = (props: IPostProps) => {

  const profilePic = getProfilePictureHook(props.posterAvatar)

  return (
    <PostRoot>
      <Avatar imageUrl={profilePic} userId={props.posterId} />
      <PostTextWrapper>
        <Link
          to={`/profile/${props.posterId}`}
          onClick={() => {
            console.log(`go to user: ${props.posterId} profile`);
          }}
        >
          <PostAuthorText>
            {props.posterName} - {props.postTime}
          </PostAuthorText>
        </Link>
        <PostContentText> {props.postContent} </PostContentText>
      </PostTextWrapper>
    </PostRoot>
  );
};

export default Post;
