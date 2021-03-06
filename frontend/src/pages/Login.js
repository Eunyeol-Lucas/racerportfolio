import axios from "axios";
import React, { useState } from "react";
import * as Login from "./Cordinate";
import { useHistory } from "react-router-dom";
import Banner from "react-js-banner";

// Login Page
export default function LoginPage() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [banner, setBanner] = useState(false);
  const [fail, setFail] = useState(false);
  const history = useHistory();

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
      .post(`${process.env.REACT_APP_BASE_URL}/api/login`, body)
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem(
            "access_token",
            JSON.stringify(res.data.access_token)
          );
          localStorage.setItem("username", JSON.stringify(res.data.username));
          setBanner(true);
          setTimeout(() => {
            history.push("/main");
            window.location.replace("/");
          }, 2000);
        }
      })
      .catch((e) => {
        setFail(true);
        setTimeout(() => setFail(false), 2000);
      });
  };
  const username = JSON.parse(window.localStorage.getItem("username"));

  return (
    <>
      <Login.InformContainer>
        <Banner
          showBanner={banner}
          css={{ backgroundColor: "#0080ff", fontSize: 22, color: "white" }}
          title="로그인 성공 ✅"
          visibleTime={3000}
        />
        <Banner
          showBanner={fail}
          css={{ backgroundColor: "#ff4d4d", fontSize: 22, color: "white" }}
          title="아이디 또는 비밀번호를 확인해주세요."
        />
      </Login.InformContainer>
      <Login.Container>
        {window.localStorage.getItem("access_token") ? (
          <h2>{`환영합니다 ${username} 님.`}</h2>
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
    </>
  );
}
