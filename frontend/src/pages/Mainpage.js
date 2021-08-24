import axios from "axios";
import React, { useState, useEffect } from "react";
import authHeader from "../modules/authHeader";
import tokenCheck from "../modules/authToken";
import styled from "styled-components";
// Racer 정보 및 수정 업로드 기능 page
export default function Mainpage() {
  const [file, setFile] = useState("../public/default.png");
  const [introduction, setIntroduction] = useState("");
  //token 확인 및 유저 프로필 정보 요청

  useEffect(() => {
    const request_profile = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/profile`, { headers: authHeader() })
        console.log(response.data)
        setFile({ file: `${process.env.REACT_APP_BASE_URL}/${response.data}` });
        
      } catch (err) {
        console.log(err.response)
      }
    }
    request_profile();
  }, [])

  const onhandlerChange = async (event) => {
    if (file.file !== null) {
      URL.revokeObjectURL(file);
    }
    setFile({
      file: URL.createObjectURL(event.target.files[0]),
    });

    const imageFile = Array.from(event.target.files);
    const formData = new FormData();
    formData.append("file", imageFile[0]);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/profile`,
        formData,
        { headers: authHeader() }
      );
      console.log(response);
    } catch (error) {
      console.log(error.response);
    }
    // const data = await response.json();
    // setFile({
    //   file: `data:image/jpeg;base64, ${data["data"]}`,
    //   uploading: true,
    // });
  };

  return (
    <div>
      <div>
        <Img src={file.file} alt="#" />
        <form>
          <p>
            <input type="file" accept="image/*" onChange={onhandlerChange} />
          </p>
          <p>
            <input
              type="text"
              value={introduction}
              onChange={(e) => setIntroduction(e.target.value)}
              placeholder="아무말 대잔치"
            />
          </p>
          <p>
            <button type="submit">SEND</button>
          </p>
        </form>
      </div>
    </div>
  );
}

const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid white;
  background-color: red;
`