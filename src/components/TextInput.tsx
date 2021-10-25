import React, {useState, Dispatch, SetStateAction} from 'react';
import styled from 'styled-components';

interface ITextInputProps {
  onChange: Dispatch<SetStateAction<string>>;
  value: string;
  placeholder: string;
  secure?: boolean;
}

// const StyledInput = styled.div`
//   width: 322px;
//   height: 56px;
//   border: 1px solid #f0f0f0;
//   border-radius: 5px;
//   color: white;
//   margin: 20px;
//   padding-left: 6px;
// `;

const TextInput = (props: ITextInputProps) => {
  return (
    <div>
      FIXX
      {/* <StyledInput
        onChangeText={props.onChange}
        value={props.value}
        placeholder={props.placeholder}
        placeholderTextColor="#CCCCCC"
        secureTextEntry={props.secure}      
        /> */}
    </div>
  );
};

export default TextInput;
