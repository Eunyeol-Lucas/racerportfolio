import React from "react";
import { Route, Link } from "react-router-dom";
import LoginPage from "./pages/Login";
import Network from "./pages/Network";
import RegisterPage from "./pages/RegisterPage";
import PrivateRoute from "./Helper/PrivateRoute";
import Main from "./pages/Main";
import Logout from "./pages/Logout";
import Users from "./pages/Users";
import styled from "styled-components";
function App() {

  return (
    <>
      <Container>
        <p>RacerIn</p>
        <Navi>
          {!window.localStorage.getItem("access_token") ? (
            <div>
              <StyledLink to="/login">로그인</StyledLink>

              <StyledLink to="/register">회원가입</StyledLink>
            </div>
          ) : (
            <div>
              <StyledLink to="/main">메인 페이지</StyledLink>

              <StyledLink to="/network">네트워크</StyledLink>

              <StyledLink to="/logout">로그아웃</StyledLink>
            </div>
          )}
        </Navi>
      </Container>
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <PrivateRoute component={Network} path="/network" />
      <PrivateRoute exact component={Main} path={["/", "/main"]} />
      <PrivateRoute component={Users} path="/main/user/:id" />
      <PrivateRoute component={Logout} path="/logout" />
    </>
  );
}

export default App;

const Container = styled.header`
  display: flex;
  position: sticky;
  z-index: 999;
  top: 0;
  background-color: white;
  padding-right: 30px;
  padding-left: 30px;
  height: 70px;
  text-align: center;
  align-items: center;
  font-size: 25px;
  min-width: 600px;
  box-shadow: 0 6px 12px -2px rgba(50, 50, 93, 0.25),
    0 3px 7px -3px rgba(0, 0, 0, 0.3);
    font-weight: 500;
`;

const Navi = styled.ul`
  display: flex;
  margin-left: auto;
`;

const StyledLink = styled(Link)`
  margin-left: 20px;
`;
