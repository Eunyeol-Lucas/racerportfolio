import React, { useState, useCallback } from "react";

const RegisterPage = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [username, setUsername] = useState("");

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    /**검증 로직 만들기
     * 1. 비밀번호와 비밀번호 체크가 다를 경우를 검증한다
     */
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    console.log({
      id,
      password,
      passwordCheck,
      username,
    });
  }, [password, passwordCheck])

  // Custom Hook 이전
 
  const onChangePasswordChk = useCallback((e) => {
    //비밀번호를 입력할때마다 password 를 검증하는 함수
    setPasswordError(e.target.value !== password);
    setPasswordCheck(e.target.value);
  }, [passwordCheck]);
    
  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="id">아이디</label>
          <br />
          <input name="id" value={id} required onChange={(e)=>setId(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <br />
          <input
            name="password"
            type="password"
            value={password}
            required
            onChange={(e) => 
    setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password-check">비밀번호 확인</label>
          <br />
          <input
            name="password-check"
            type="password"
            value={passwordCheck}
            required
            onChange={onChangePasswordChk}
          />
          {passwordError && (
            <div style={{ color: "red" }}>비밀번호가 일치하지 않습니다.</div>
          )}
        </div>
        <div>
          <label htmlFor="username">이름</label>
          <br />
          <input
            name="username"
            value={username}
            required
            onChange={onChangeUsername}
          />
        </div>
        <div>
          <button htmlType="submit">가입하기</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
