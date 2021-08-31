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
  width: 125px;
  height: 125px;
  border-radius: 50%;
  border: none;
  background-color: #f2f2f2;
  box-shadow: 0 6px 12px -2px rgba(50, 50, 93, 0.25),
    0 3px 7px -3px rgba(0, 0, 0, 0.3);
`;
