import React, { useState, useCallback } from "react";
import axios from "axios";
import * as Register from "./Cordinate";
import styled from "styled-components";
import Banner from "react-js-banner";
//회원가입 page
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
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);

  const { history } = props;
  // Custom Hook 이전
  // 두 비밀번호가 일치하는지 확인
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
  };
  // 패스워드 유효성 검사
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
  // 이름 유효성 검사
  const onChangeUsername = (e) => {
    setUsername(e.target.value);
    const checkUsername = (value) => {
      const regExp = /^[a-zA-Z가-힣]*$/;
      return regExp.test(value);
    };
    !checkUsername(e.target.value)
      ? setUsernameCheck(false)
      : setUsernameCheck(true);
  };
  const onFail = () => {
    setFail(true);
    setTimeout(() => setFail(false), 2000);
  };
  // 회원가입 버튼 누를 경우, 최종 확인
  /**검증 로직 만들기
     1. 아이디가 이메일이 아닐 경우 return
     2. 비밀번호와 비밀번호 체크가 다를 경우 return
     3. 사용자 이름이 기준에 맞지 않을 경우 return
     4. 모든 유효성 검사를 통과할 경우 서버에 data 저장 요청
     5. 중복된 아이디가 있을 경우 -> fail -> 아이디 유효성 검사 실패 -> return
     6. 최종적으로 모든 유효성 검사를 통과할 경우 데이터 저장 -> 회원가입 완료
     7. 회원가입 완료 후 로그인 page로 이동
     */
  const onSubmit = (e) => {
    e.preventDefault();
    if (!idCheck) {
      onFail();
      return;
    }
    if (!passwordVali) {
      onFail();
      return;
    }
    if (password !== passwordCheck) {
      setPasswordError(true);
      onFail();
      return;
    }
    if (!usernameCheck) {
      onFail();
      return;
    }

    const body = {
      username,
      id,
      password,
    };
    axios.post(`http://localhost:5000/api/register`, body).then((res) => {
      if (res.data.result === "fail") {
        setIdValidate(false);
      } else {
        setSuccess(true);
        setTimeout(() => history.push("/login"), 2000);
      }
    });
  };

  return (
    <>
      <Register.InformContainer>
        <Banner
          showBanner={success}
          css={{ backgroundColor: "#0080ff", fontSize: 22, color: "white" }}
          title="회원가입에 성공하셨습니다."
        />
        <Banner
          showBanner={fail}
          css={{ backgroundColor: "#ff4d4d", fontSize: 22, color: "white" }}
          title="양식에 알맞게 입력해주세요."
        />
      </Register.InformContainer>
      <Register.Container large>
        <form onSubmit={onSubmit}>
          <Register.InputBlock>
            <Register.Label htmlFor="id">ID</Register.Label>
            <Register.Inputbox large
              name="id"
              value={id}
              required
              idCheck={idCheck}
              idValidate={idValidate}
              onChange={(e) => {
                onChangeId(e);
                setIdValidate(true);
              }}
              placeholder="ID"
            />
            {!idCheck && (
              <WarningP style={{ color: "red" }}>
                Email 형식으로 입력해주세요.
              </WarningP>
            )}
            {!idValidate && (
              <WarningP style={{ color: "red" }}>
                중복된 아이디가 존재합니다.
              </WarningP>
            )}
          </Register.InputBlock>
          <Register.InputBlock>
            <Register.Label htmlFor="password">PASSWORD</Register.Label>
            <Register.Inputbox large 
              name="password"
              type="password"
              value={password}
              placeholder="PASSWORD"
              required
              onChange={onChangePassword}
              passwordVali={passwordVali}
            />
            {!passwordVali && (
              <WarningP style={{ color: "red" }}>
                영문, 숫자, 특수문자 조합 10자리 이상
              </WarningP>
            )}
          </Register.InputBlock>
          <Register.InputBlock>
            <Register.Label htmlFor="password-check">
              PASSWORD CHECK
            </Register.Label>
            <Register.Inputbox large
              name="password-check"
              type="password"
              value={passwordCheck}
              placeholder="PASSWORD CHECK"
              required
              onChange={onChangePasswordChk}
              passwordError={passwordError}
            />
            {passwordError && (
              <WarningP style={{ color: "red" }}>
                비밀번호가 일치하지 않습니다.
              </WarningP>
            )}
          </Register.InputBlock>
          <Register.InputBlock>
            <Register.Label htmlFor="username">NAME</Register.Label>
            <Register.Inputbox large
              name="username"
              value={username}
              placeholder="YOUR NAME"
              required
              onChange={onChangeUsername}
              usernameCheck={usernameCheck}
            />
            {!usernameCheck && (
              <WarningP style={{ color: "red" }}>
                한글 또는 영문으로만 입력이 가능합니다.
              </WarningP>
            )}
          </Register.InputBlock>
          <div>
            <p>
              <Register.Button large type="submit">
                회원가입
              </Register.Button>
            </p>
          </div>
        </form>
      </Register.Container>
    </>
  );
};

export default RegisterPage;

const WarningP = styled.p`
  margin: 0;
  padding: 0;
`;
