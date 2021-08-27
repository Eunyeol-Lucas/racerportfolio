import axios from "axios";
import React, { useState } from "react";
import * as Login from "./Cordinate";

// Login Page
export default function LoginPage  () {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userId === "" || password === "") {
      alert("아이디 또는 비밀번호를 입력해주세요");
      return;
    }
    // if (!userId && !password) return;
    const body = {
      userId,
      password,
    };
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/login`, body)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          console.log("access_token", res.data);
          localStorage.setItem(
            "access_token",
            JSON.stringify(res.data.access_token)
          );
          window.location.href = "/main";
          alert("로그인에 성공하였습니다.");
        }
      })
      .catch((e) => {
        console.log(e.response);
        alert("아이디 또는 비밀번호를 확인하세요");
      });
  };

  return (
    <Login.Container>
      {window.localStorage.getItem("access_token") ? (
        <div>환영합니다.</div>
      ) : (
        <form form onSubmit={handleSubmit}>
          <Login.InputBlock>
            <Login.Label htmlFor="userId">ID</Login.Label>

            <Login.Inputbox
              placeholder="Enter your Email"
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </Login.InputBlock>
          <Login.InputBlock>
            <Login.Label htmlFor="password">PASSWORD </Login.Label>
            <Login.Inputbox
              placeholder="Enter your Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Login.InputBlock>
          <Login.Button type="submit">로그인</Login.Button>
        </form>
      )}
    </Login.Container>
  );
};



  
  
