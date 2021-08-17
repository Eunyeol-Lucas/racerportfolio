import React, { useState, useCallback } from "react";
import axios from "axios";

const RegisterPage = (props) => {
  const [id, setId] = useState("");
  const [idCheck, setIdCheck] = useState(true);
  const [idValidate, setIdValidate] = useState(true);
  const [password, setPassword] = useState("");
  const [passwordVali, setPasswordVali] = useState(true);
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [username, setUsername] = useState("");
  const [usernameCheck, setUsernameCheck] = useState(true);

  const { history } = props;
  // Custom Hook 이전

  const onChangePasswordChk = useCallback(
    (e) => {
      //비밀번호를 입력할때마다 password 를 검증하는 함수
      setPasswordError(e.target.value !== password);
      setPasswordCheck(e.target.value);
    },
    [passwordCheck]
  );
  // 아이디 중복 검사
  const onChangeId = (e) => {
    setId(e.target.value);
    const checkEmail = (value) => {
      const regExp =
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
      return regExp.test(value);
    };
    !checkEmail(e.target.value) ? setIdCheck(false) : setIdCheck(true);
    // if (setIdCheck) {
    //   axios.post(`http://localhost:5000/register`, e.target.value).then();
    // }
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
    const checkPassword = (value) => {
      const regExp = /^.*(?=.{10,20})(?=.*[0-9])(?=.*[a-zA-Z]).*$/;
      return regExp.test(value);
    };
    !checkPassword(e.target.value)
      ? setPasswordVali(false)
      : setPasswordVali(true);
  };

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
    const checkUsername = (value) => {
      const regExp = /^[가-힣]|[a-zA-Z]$/;
      return regExp.test(value);
    };
    !checkUsername(e.target.value)
      ? setUsernameCheck(false)
      : setUsernameCheck(true);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    /**검증 로직 만들기
     * 1. 비밀번호와 비밀번호 체크가 다를 경우를 검증한다
     */
    if (!idCheck) return;

    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!usernameCheck) return;
    console.log({ id, username, password });
    let body = {
      username,
      id,
      password,
    };
    
    axios
      .post(`http://localhost:5000/register`, body)
      .then((res) => res.json())
      .catch((e) => { return; })
      
      history.push('/login')
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="id">아이디</label>
          <input
            name="id"
            value={id}
            required
            onChange={onChangeId}
            placeholder="abc@email.com"
          />
          {!idCheck && (
            <div style={{ color: "red" }}>ID 형식이 유효하지 않습니다.</div>
          )}
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input
            name="password"
            type="password"
            value={password}
            required
            onChange={onChangePassword}
          />
          {!passwordVali && (
            <div style={{ color: "red" }}>
              영문, 숫자, 특수문자 중 2종류 이상을 조합하여 최소 10자리 이상
            </div>
          )}
        </div>
        <div>
          <label htmlFor="password-check">비밀번호 확인</label>
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
          <input
            name="username"
            value={username}
            required
            onChange={onChangeUsername}
          />
          {!usernameCheck && (
            <div style={{ color: "red" }}>
              한글 또는 영문으로만 입력이 가능합니다.
            </div>
          )}
        </div>
        <div>
          <p>
            <button type="submit">가입하기</button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
