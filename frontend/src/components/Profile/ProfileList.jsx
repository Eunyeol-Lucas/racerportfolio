import React from "react";
import styled from "styled-components";

export default function ProfileList({ file, username, introduction }) {
  return (
    <div>
      <h2>프로필</h2>
      <Img src={file.file} alt="#" />
      <h3>{username}</h3>
      <h4>{introduction}</h4>
    </div>
  );
}

const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: none;
  background-color: yellow;
`;

