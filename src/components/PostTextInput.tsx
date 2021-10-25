import React, {useState, Dispatch, SetStateAction} from 'react';
import styled from 'styled-components';

interface IPostTextInputProps {
  onChange: Dispatch<SetStateAction<string>>;
  value: string;
  placeholder: string;
  secure?: boolean;
}


const StyledInput = styled.input`
  min-width: 100%;
  height: 60%;
  border-radius: 5px;
  color: white;
  padding: 26px;
  line-height: 18px;
`;

const PostTextInput = (props: IPostTextInputProps) => {
  return (
    <div>
      FIX
    </div>
  );
};

export default PostTextInput;
