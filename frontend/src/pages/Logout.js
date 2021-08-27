import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
export default function Logout() {
  const [status, setStatus] = useState(true)
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      window.localStorage.removeItem("access_token");
      setStatus(false);
      window.location.replace("/");
      // history.push("/login");
    },1000)
  },[status]);

  return (
    <Container>
      <p>로그아웃 되었습니다.</p>
      <p>다시 놀러오세요</p>
    </Container>
  );
}

const Container = styled.div`
    font-size: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`