import React from "react";
import styled, { css } from "styled-components";
import {
  Award,
  Certificate,
  Education,
  Profile,
  Project,
} from "../components/allComponents";

const Main = () => {
  return (
    <Container>
      <Profile />
      <div>
        <Education />
        <Award />
        <Project />
        <Certificate />
      </div>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  padding: 0;
  margin-left: auto;
  margin-right: auto;
  max-width: 1300px;
  justify-content: space-around;
  top: 50px;
`;
