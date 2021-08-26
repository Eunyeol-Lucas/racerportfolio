import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProjectList from "./Project/ProjectList";
import ProjectInput from "./Project/ProjectInput";
import axios from "axios";
import authHeader from "../modules/authHeader";

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
        console.log(response);
        setProjectList(response.data);
      } catch (err) {
        console.log(err.response);
      }
    };
    requestUserProject();
  }, [isToggle]);

  useEffect(() => {
    console.log(startDate);
  }, [startDate]);

  const onSubmit = async (e) => {
    e.preventDefault();

    const body = { title, content, startDate, endDate };
    console.log(body);
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
    <Container>
      <h2>프로젝트</h2>
      {isToggle ? (
        <div>
          <ProjectList projectList={projectList} />
          <button onClick={() => setIsToggle(false)}>수정하기</button>
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
    </Container>
  );
};

export default Project;

const Container = styled.div`
  background-color: green;
`;
