import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface IAvatarProps {
  imageUrl: string;
  size?: string;
  userId: string;
}

const Avatar = (props: IAvatarProps) => {
  const getImageSize = () => {
    if (props.size) {
      return props.size;
    }
    return "50px";
  };

  const AvatarImage = styled.img`
    height: ${getImageSize()};
    width: ${getImageSize()};
    border-radius: 50px;
  `;

  return (
    <div>
      <Link to={`/profile/${props.userId}`}>
        <AvatarImage src={`url(${props.imageUrl})`} />
      </Link>
    </div>
  );
};

export default Avatar;
