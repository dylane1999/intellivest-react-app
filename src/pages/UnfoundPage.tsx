import React from 'react'
import styled from 'styled-components'
import {Redirect} from "react-router-dom"
const Root = styled.div`
  background-color: #323232;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 85vh;
  width: 100%;
`;

const UnfoundPage = () => {
    return (
        <Root>
            <Redirect to="/"/>
        </Root>
    )
}

export default UnfoundPage
