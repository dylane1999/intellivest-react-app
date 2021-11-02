import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../store";
import { setIsWritingPost } from "../reducers/postSlice";
import PostTextInput from "../components/PostTextInput";
import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";

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

const DisabledSubmitButton = styled.button`
  width: 69px;
  height: 36px;
  background: rgba(85, 91, 169, 0.5);
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const WritePostPage = () => {
  const state = useSelector((state: RootState) => state.user.id);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmitPost = () => {
    console.log("submitting the post: ", postContent);
    dispatch(setIsWritingPost(false));
    history.goBack();
  };

  const handleCancelPost = () => {
    console.log("cancelling the post");
    dispatch(setIsWritingPost(false));
    history.goBack();
  };

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
            height: 59
          }}
        >
          <CancelText>Cancel</CancelText>
        </Button>

          <Button
          onClick={() => handleSubmitPost()}
          disabled={postContent.length == 0}
          variant="contained"
          className="actionButton"
          sx={{
            backgroundColor: "#5559af",
            width: 105,
            height: 59
          }}
        >
          <SubmitText>Submit</SubmitText>
        </Button>
      </WritePostOperationsWrapper>
      <PostTextInput
        value={postContent}
        setValue={setPostContent}
        label="Post Content"
        width="50vw"
        height="100px"
        padding="6px"
        type="input"
      />
    </Root>
  );
};

export default WritePostPage;
