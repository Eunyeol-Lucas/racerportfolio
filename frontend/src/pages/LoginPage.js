import axios from "axios";
import React, { useState } from "react";

const LoginPage = ({ history }) => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userId && !password) return;
    const body = {
      userId,
      password,
    };
    axios
      .post("http://localhost:5000/login", body)
      .then((res) => {
        console.log(res.data.result);
        if (res.data.result === "success") {
          history.push("/");
        } else return;
      })
    // .then(json => console.log(json))
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userId"></label>
          아이디
          <input
            placeholder="ID를 입력하세요"
            type='text'
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">비밀번호 </label>
          <input
            placeholder="비밀번호를 입력하세요"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default LoginPage;
