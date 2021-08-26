import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

import { Link } from "react-router-dom";
const Navigation = (props) => {
  

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand> Racerin </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              메인
            </Link>
            <Link to="/network" className="nav-link">
              네트워크
            </Link>
            {isLogin ? (
              <Link className="nav-link">
                로그아웃
              </Link>
            ) : (
              <Link to="/login" className="nav-link">
                로그인
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
