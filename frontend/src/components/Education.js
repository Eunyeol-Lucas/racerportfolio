import React, { useState, useEffect } from "react";
import EducationInput from "./Education/EducationInput";
import EducationList from "./Education/EducationList";
import axios from "axios";
import authHeader from "../modules/authHeader";
import styled from "styled-components";

const Education = () => {
  const [educationList, setEducationList] = useState([]);
  const [school, setSchool] = useState("");
  const [major, setMajor] = useState("");
  const [radio, setRadio] = useState("");
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
  }, [isToggle]);

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(school, major, radio);
    if (school === "" || major === "" || radio === "") {
      setIsToggle(true);
      return;
    }
    const body = { school, major, status: radio };
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/education`,
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
      <h2>학력</h2>
      {isToggle ? (
        <EducationList
          educationList={educationList}
          setIsToggle={setIsToggle}
        />
      ) : (
        <EducationInput
          educationList={educationList}
          setMajor={setMajor}
          setSchool={setSchool}
          setRadio={setRadio}
          onSubmit={onSubmit}
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
