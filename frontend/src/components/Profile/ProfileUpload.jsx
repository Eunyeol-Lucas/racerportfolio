import React from "react";
import styled from "styled-components";
import { BiSave } from "react-icons/bi";
import * as Main from '../Components'



export default function ProfileUpload({
  onhandlerChange,
  username,
  file,
  introduction,
  setUsername,
  setIntroduction,
  onSubmitIntroduction,
}) {
  return (
    <div>
      <h2>프로필</h2>
      <p>
        <label className="input-file-button" htmlFor="input-file">
          <Img src={file.file} alt="#" />
        </label>
        <input
          id="input-file"
          type="file"
          accept="image/*"
          onChange={onhandlerChange}
          style={{ display: "none" }}
        />
      </p>
      <form onSubmit={onSubmitIntroduction}>
        <p>
          <Input
            type="text"
            defaultValue={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </p>
        <p>
          <Input
            type="text"
            onChange={(e) => setIntroduction(e.target.value)}
            placeholder="아무말 대잔치"
            defaultValue={introduction}
          />
        </p>
        <Main.TransButton type="submit">
          <BiSave />
        </Main.TransButton>
      </form>
    </div>
  );
}

const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid white;
  background-color: yellow;
  &:hover {
      cursor: pointer;
  }
`;

const Input = styled.input`
  font-size: 16px;
  background-color: transparent;
  color: black;
  text-align: center;
  width: 150px;
  &:hover {
      cursor: pointer;
  }
`;


