import React from "react";
import { useSelector } from "react-redux";
import {
  Award,
  Certificate,
  Education,
  Profile,
  Project,
} from '../components/allComponents'

const Main = () => {
//   const isLogin = useSelector((state) => state.auth);
//   console.log(isLogin);
  return (
    <div>
      <h1> Main </h1>
      <Profile />
      <Education />
      <Award />
      <Project />
      <Certificate />
    </div>
  );
};

export default Main;
