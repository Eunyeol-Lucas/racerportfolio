import React, { useState, useEffect } from "react";
import EducationInput from "./Education/EducationInput";
import EducationList from "./Education/EducationList";
import axios from "axios";
import authHeader from "../modules/authHeader";
import { BiEditAlt } from "react-icons/bi";
import * as Main from "./Components"

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
        setEducationList(response.data);
      } catch (err) {
        console.log(err.response);
        if (err.response.status === 401) {
          alert("토큰이 만료되었습니다.");
          window.localStorage.removeItem("access_token");
        }
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
    <Main.Container>
      {isToggle ? (
        <div>
          <EducationList
            educationList={educationList}
            setIsToggle={setIsToggle}
          />
          <Main.TransButton onClick={() => setIsToggle(false)}><BiEditAlt /></Main.TransButton>
        </div>
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
    </Main.Container>
  );
};

export default Education;


