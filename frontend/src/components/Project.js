import React, { useState, useEffect } from "react";
import ProjectList from "./Project/ProjectList";
import ProjectInput from "./Project/ProjectInput";
import axios from "axios";
import authHeader from "../modules/authHeader";
import * as Main from './Components'
import { BiEditAlt } from "react-icons/bi";

const Project = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [projectList, setProjectList] = useState([]);
  const [isToggle, setIsToggle] = useState(true);

  useEffect(() => {
    const requestUserProject = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/project`,
          { headers: authHeader() }
        );
        setProjectList(response.data);
      } catch (err) {
        console.log(err.response);
        if (err.response.status === 401) {
          alert("토큰이 만료되었습니다.");
          window.localStorage.removeItem("access_token");
        }
      }
    };
    requestUserProject();
  }, [isToggle]);

  const onSubmit = async (e) => {
    e.preventDefault();

    const body = { title, content, startDate, endDate };
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/project`,
        body,
        { headers: authHeader() }
      );
      console.log(response);
      setIsToggle(true);
    } catch (err) {
      console.log(err.response);
    }
  };

  return (
    <Main.Container>
      {isToggle ? (
        <div>
          <ProjectList projectList={projectList} />
          <Main.TransButton onClick={() => setIsToggle(false)}><BiEditAlt /></Main.TransButton>
        </div>
      ) : (
        <ProjectInput
          projectList={projectList}
          setTitle={setTitle}
          setContent={setContent}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          onSubmit={onSubmit}
          startDate={startDate}
          endDate={endDate}
          setIsToggle={setIsToggle}
        />
      )}
    </Main.Container>
  );
};

export default Project;

