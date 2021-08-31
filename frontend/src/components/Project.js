import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ProjectList from "./Project/ProjectList";
import ProjectInput from "./Project/ProjectInput";
import axios from "axios";
import authHeader from "../modules/authHeader";
import * as Main from './Components'
import { BiEditAlt } from "react-icons/bi";

const Project = ({setCheckToken}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [projectList, setProjectList] = useState([]);
  const [isToggle, setIsToggle] = useState(true);

  const history = useHistory();

  useEffect(() => {
    const requestUserProject = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/api/project`,
          { headers: authHeader() }
        );
        setProjectList(response.data);
      } catch (err) {
        if (err.response.status === 401) {
          setCheckToken(true);
          setTimeout(() => {
            history.push("/logout");
          }, 2000);
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
        `${process.env.REACT_APP_BASE_URL}/api/project`,
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

