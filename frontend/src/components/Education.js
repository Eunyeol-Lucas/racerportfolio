import React, { useState, useEffect } from "react";
import CreateEducationInputList from "./Education/EducationInput";
import EducationList from "./Education/EducationList";
import axios from "axios";
import authHeader from "../modules/authHeader";
import styled from "styled-components";

const Education = () => {
  const [educationList, setEducationList] = useState([]);
  const [educationStatus, setEducationStatus] = useState({
    name: "",
    major: "",
    status: "",
  });
  const [addEducations, setAddEducations] = useState([]);
  const [isToggle, setIsToggle] = useState(true);

  useEffect(() => {
    const requestUserEdu = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/education`,
          { headers: authHeader() }
        );
        console.log(response);
        setEducationList(response.data);
      } catch (err) {
        console.log(err.response);
      }
    };
    requestUserEdu();
  }, []);

  const { school, major, status } = educationStatus;
  const onChange = (e) => {
    const { name, value } = e.target;
    setEducationStatus({
      ...educationStatus,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    setAddEducations([...addEducations, educationStatus]);
  };

  return (
    <Container>
      <h2>학력</h2>
      {isToggle ? (
        <EducationList
          educationList={educationList}
          setIsToggle={setIsToggle}
        />
      ) : (
        <CreateEducationInputList
          educationList={educationList}
          setIsToggle={setIsToggle}
        />
      )}
    </Container>
  );
};

export default Education;

const Container = styled.div`
  background-color: yellow;
`;
