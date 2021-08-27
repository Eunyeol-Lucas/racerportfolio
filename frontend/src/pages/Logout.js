import React, { useEffect } from "react";
import styled from "styled-components";
export default function Logout() {
  useEffect(() => {
    window.localStorage.removeItem("access_token");
    window.location.href = "/login";
  });
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