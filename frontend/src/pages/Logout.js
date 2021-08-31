import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import * as Log from "./Cordinate";
import Banner from "react-js-banner";
export default function Logout() {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      window.localStorage.removeItem("access_token");
      window.localStorage.removeItem("username");
      window.location.replace("/logout");
      history.push("/login");
    }, 2000);
  }, []);

  const username = JSON.parse(window.localStorage.getItem("username"));

  return (
    <>
      <Log.InformContainer>
        <Banner
          css={{ backgroundColor: "#0080ff", fontSize: 22, color: "white" }}
          title="로그아웃 되었습니다."
          visibleTime={2000}
        />
      </Log.InformContainer>
      <Log.Container>
        <Container>
          <h2>{username}님, 또 놀러오세요</h2>
        </Container>
      </Log.Container>
    </>
  );
}

const Container = styled.div`
  top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;
