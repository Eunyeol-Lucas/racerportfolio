import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProjectList from "./Project/ProjectList";
import CreateProjectInput from "./Project/ProjectInput";
import axios from "axios";
import authHeader from "../modules/authHeader";
import DatePicker from "react-datepicker";

const Project = () => {
  const [projectSubmitList, setProjectSubmitList] = useState([]);
  // const [startDate, setStartDate] = useState(new Date());
  // const [endDate, setEndDate] = useState(new Date());
  const [projectList, setProjectList] = useState([]);

  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  // const [startDateString, setStartDateString] = useState("");
  // const [endDateString, setEndDateString] = useState("");
   const [projectStatus, setProjectStatus] = useState({
     title: "",
     content: "",
     project_date: dateRange,
   });

 
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
  }, []);

  const { title, content, start_date, end_date } = projectStatus;
  const onChange = (e) => {
    const { name, value } = e.target;
    setProjectStatus({
      ...projectStatus,
      [name]: value,
    });
  };

  const onSave = (e) => {
    e.preventDefault();
    if (projectStatus.name === "" || projectStatus.content === "")
      return alert("프로젝트 이력을 입력해주세요.");
    setProjectSubmitList([...projectSubmitList, projectStatus]);
  };

  const onSubmit = async (e) => {
    const body = { data: projectSubmitList };
    console.log(body);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/project`,
        body,
        { headers: authHeader() }
      );
      console.log(response);
    } catch (err) {
      console.log(err.response);
    }
  };

  return (
    <Container>
      <h2>프로젝트</h2>
      <ProjectList projectList={projectList} />
      <button>수정하기</button>

      <CreateProjectInput
        title={title}
        content={content}
        start_date={start_date}
        end_date={end_date}
        onChange={onChange}
        onSave={onSave}
        onSubmit={onSubmit}
        projectList={projectList}
        startDate={startDate}
        
        endDate={endDate}
        
        setDateRange={setDateRange}
      />
    </Container>
  );
};

export default Project;

const Container = styled.div`
  background-color: green;
`;
