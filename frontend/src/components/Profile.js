import axios from "axios";
import React, { useState, useEffect } from "react";
import authHeader from "../modules/authHeader";
import styled from "styled-components";
import ProfileList from "./Profile/ProfileList";
import ProfileUpload from "./Profile/ProfileUpload";
import { BiEditAlt } from "react-icons/bi";
import * as Main from "./Components";
import { useHistory } from "react-router-dom";
import { TokenExpire } from "../modules/authToken";

// Racer 정보 및 수정 업로드 기능 page
export default function Profile({ setCheckToken }) {
  const [file, setFile] = useState({ file: null });
  const [username, setUsername] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [isToggle, setIsToggle] = useState(true);
  const history = useHistory();

  //token 확인 및 유저 프로필 정보 요청

  useEffect(() => {
    const request_profile = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/api/profile`,
          { headers: authHeader() }
        );
        setFile({
          file: `${process.env.REACT_APP_BASE_URL}/${response.data.profile_image}`,
        });
        setUsername(response.data.username);
        setIntroduction(response.data.introduction);
      } catch (err) {
        console.log(err.response);
        if (err.response.status === 401) {
          setCheckToken(true);
          setTimeout(() => {
            history.push("/logout");
          }, 2000);
        }
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
        `${process.env.REACT_APP_BASE_URL}/api/profile`,
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
        `${process.env.REACT_APP_BASE_URL}/api/profile`,
        body,
        { headers: authHeader() }
      );
      console.log(response);
      setIsToggle(true);
    } catch (err) {
      console.log(err.response);
      if (err.response.status === 401) {
        setCheckToken(true);
        setTimeout(() => {
          history.push("/logout");
        }, 2000);
      }
    }
  };

  return (
    <Container>
      {isToggle ? (
        <div>
          <ProfileList
            file={file}
            username={username}
            introduction={introduction}
            setIsToggle={setIsToggle}
          />
          <Main.TransButton
            onClick={() => {
              setIsToggle(false);
            }}
          >
            <BiEditAlt />
          </Main.TransButton>
        </div>
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
  position: sticky;
  margin: 0;
  top: 150px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  background-color: white;
  margin: 0 auto 0;
  width: 250px;
  height: 350px;
  border-radius: 15px;
  box-shadow: 0 6px 12px -2px rgba(50, 50, 93, 0.25),
    0 3px 7px -3px rgba(0, 0, 0, 0.3);
`;
