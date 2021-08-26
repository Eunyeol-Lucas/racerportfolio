import axios from "axios";
import React, { useState, useEffect } from "react";
import authHeader from "../modules/authHeader";
// import tokenCheck from "../modules/authToken"; 고민중...쓸까말까
import styled from "styled-components";
import ProfileList from "./Profile/ProfileList";
import ProfileUpload from "./Profile/ProfileUpload";

// Racer 정보 및 수정 업로드 기능 page
export default function Mainpage() {
  const [file, setFile] = useState({ file: null });
  const [username, setUsername] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [isToggle, setIsToggle] = useState(true);
  //token 확인 및 유저 프로필 정보 요청

  useEffect(() => {
    const request_profile = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/profile`,
          { headers: authHeader() }
        );
        console.log(response.data);
        setFile({
          file: `${process.env.REACT_APP_BASE_URL}/${response.data.profile_image}`,
        });
        setUsername(response.data.username);
        setIntroduction(response.data.introduction);
      } catch (err) {
        console.log(err.response);
      }
    };
    request_profile();
  }, []);
  // 프로필 이미지 변경 후 서버로 전달
  const onhandlerChange = async (event) => {
    const imageFile = Array.from(event.target.files);
    const formData = new FormData();
    formData.append("file", imageFile[0]);
    try {
      const response = await axios.patch(
        `${process.env.REACT_APP_BASE_URL}/profile`,
        formData,
        { headers: authHeader() }
      );
      console.log(response);
    } catch (error) {
      console.log(error.response);
    }
    setFile({
      file: URL.createObjectURL(event.target.files[0]),
    });
  };

  // username 및 introduction 수정 후 서버로 전달
  const onSubmitIntroduction = async (e) => {
    e.preventDefault();
    console.log(introduction, username);
    const body = { introduction, username };
    try {
      const response = await axios.patch(
        `${process.env.REACT_APP_BASE_URL}/profile`,
        body,
        { headers: authHeader() }
      );
      console.log(response);
      setIsToggle(true);
    } catch (err) {
      console.log(err.response);
    }
  };

  return (
    <Container>
      {isToggle ? (
        <ProfileList
          file={file}
          username={username}
          introduction={introduction}
          setIsToggle={setIsToggle}
        />
      ) : (
        <ProfileUpload
          file={file}
          username={username}
          introduction={introduction}
          onhandlerChange={onhandlerChange}
          setUsername={setUsername}
          setIntroduction={setIntroduction}
          onSubmitIntroduction={onSubmitIntroduction}
          setIsToggle={setIsToggle}
        />
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 200px;
  background-color: red;
  align-items: center;
  text-align: center;
`;


