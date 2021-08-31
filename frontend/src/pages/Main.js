import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import {
  Award,
  Certificate,
  Education,
  Profile,
  Project,
} from "../components/allComponents";
import TokenCheck from "../modules/authToken";

const Main = () => {
  const [checkToken, setCheckToken] = useState(false);
  

  return (
    <>
      <TokenCheck setCheckToken={setCheckToken} checkToken={checkToken} />
      <Container>
        <Profile setCheckToken={setCheckToken} />
        <div>
          <Education setCheckToken={setCheckToken} />
          <Award setCheckToken={setCheckToken} />
          <Project setCheckToken={setCheckToken} />
          <Certificate setCheckToken={setCheckToken} />
        </div>
      </Container>
    </>
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
  top: 100px;
`;
