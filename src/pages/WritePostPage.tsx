import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../store";
import { setIsWritingPost } from "../reducers/postSlice";
import PostTextInput from "../components/PostTextInput";
import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";
import createPost from "../api/createPost";
import TextInput from "../components/TextInput";

const Root = styled.div`
  background-color: #323232;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  width: 100%;
`;

const WritePostOperationsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 26px;
`;

const CancelText = styled.p`
  font-size: 16px;
  color: white;
`;

const SubmitText = styled.p`
  font-size: 16px;
  color: white;
`;

const SubmitButton = styled.button`
  width: 69px;
  height: 36px;
  background: #555ba9;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const Heading = styled.div`
  color: #ffffff;
  font-size: 2.875rem;
  /* text-decoration: underline; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-bottom: 36px;
`;
const SubHeading = styled.div`
  color: #ffffff;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const Spacing = styled.div`
  padding: 6px;
`;

const WritePostPage = () => {
  const user = useSelector((state: RootState) => state.user);
  const token = useSelector((state: RootState) => state.auth.token);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmitPost = async () => {
    const post = await createPost(token, postTitle, postContent);
    console.log("submitting the post: ", post);
    // createPost
    dispatch(setIsWritingPost(false));
    history.goBack();
  };

  const handleCancelPost = () => {
    console.log("cancelling the post");
    dispatch(setIsWritingPost(false));
    history.goBack();
  };

  const [postTitle, setPostTitle] = useState("");

  const [postContent, setPostContent] = useState("");

  return (
    <Root>
      <WritePostOperationsWrapper>
        <Button
          onClick={() => handleCancelPost()}
          variant="contained"
          className="actionButton"
          sx={{
            backgroundColor: "#5559af",
            width: 105,
            height: 59,
          }}
        >
          <CancelText>Cancel</CancelText>
        </Button>

        <Button
          onClick={async () => await handleSubmitPost()}
          disabled={postContent.length == 0 || postTitle.length == 0}
          variant="contained"
          className="actionButton"
          sx={{
            backgroundColor: "#5559af",
            width: 105,
            height: 59,
          }}
        >
          <SubmitText>Submit</SubmitText>
        </Button>
      </WritePostOperationsWrapper>
      <Heading>Create a Post </Heading>
      <Spacing/>
      <Spacing/>
      <Spacing/>
      <ButtonWrapper>
        <TextInput
          value={postTitle}
          setValue={setPostTitle}
          label="Post Title"
          width="20vw"
          height="100px"
          padding="6px"
          type="input"
        />
        <PostTextInput
          value={postContent}
          setValue={setPostContent}
          label="Post Content"
          width="50vw"
          height="100px"
          padding="6px"
          type="input"
        />
      </ButtonWrapper>
    </Root>
  );
};

export default WritePostPage;
