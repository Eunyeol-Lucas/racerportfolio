import React from "react";
import { BiEditAlt } from "react-icons/bi";
import styled from "styled-components";

export default function ProfileList({ file, username, introduction, setIsToggle }) {
  return (
    <div>
      <Img src={file.file} alt="#" />
      <p>{username}</p>
      <p>{introduction}</p>
      <Button
        onClick={() => {
          setIsToggle(false);
        }}
      >
        <BiEditAlt />
      </Button>
    </div>
  );
}

const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid white;
  background-color: yellow;
`;

export const Button = styled.button`
  border: none;
  outline: 0;
  background-color: transparent;
  font-size: 25px;

  &:hover {
    top: 20px;
    left: 20px;
    color: gray;
    cursor: pointer;
  }
`;
