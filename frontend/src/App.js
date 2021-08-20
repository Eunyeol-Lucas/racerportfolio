import React from 'react';
import { Route, Link } from "react-router-dom";
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import Mainpage from './pages/Mainpage';
import Network from './pages/Network';
import RegisterPage from './pages/RegisterPage';
import PrivateRoute from './Helper/PrivateRoute';

function App() {


  return (
    <>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/login">로그인</Link>
        </li>
        <li>
          <Link to="/register">회원가입</Link>
        </li>
        <li>
          <Link to="/main">메인페이지</Link>
        </li>
        <li>
          <Link to="/network">네트워크</Link>
        </li>
      </ul>
      <Route component={Home} exact path="/" />
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <PrivateRoute component={Mainpage} path="/main" />
      <PrivateRoute component={Network} path="/network" />
    </>
  );
}

export default App;
