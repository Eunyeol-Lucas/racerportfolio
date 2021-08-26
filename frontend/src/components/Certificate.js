import React, { useState, useEffect } from "react";
import CertificateList from "./Certificate/CertificateList";
import CertificateInput from "./Certificate/CertificateInput";
import styled from "styled-components";
import axios from "axios";
import authHeader from "../modules/authHeader";

const Certificate = () => {
  const [certificateList, setCertificateList] = useState([]);
  const [name, setName] = useState("");
  const [certified_by, setCertified_by] = useState("");
  const [certified_date, setCertified_date] = useState("");
  const [isToggle, setIsToggle] = useState(true);

  useEffect(() => {
    const requestUserEdu = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/certificate`,
          { headers: authHeader() }
        );
        console.log(response);
        setCertificateList(response.data);
      } catch (err) {
        console.log(err.response);
      }
    };
    requestUserEdu();
  }, [isToggle]);

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(name, certified_by, certified_date);
    if (name === "" || certified_by === "" || certified_date === "") {
      setIsToggle(true);
      return;
    }
    const body = { name, certified_by, certified_date };
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/certificate`,
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
      <h2>자격증</h2>
      {isToggle ? (
        <div>
          <CertificateList certificateList={certificateList} />
          <button onClick={() => setIsToggle(false)}>수정하기</button>
        </div>
      ) : ( 
        <CertificateInput
          certificateList={certificateList}
          setName={setName}
          setCertified_by={setCertified_by}
          setCertified_date={setCertified_date}
          onSubmit={onSubmit}
          setIsToggle={setIsToggle}
        />
      )}
    </Container>
  );
};

export default Certificate;

const Container = styled.div`
  background-color: gray;
`;
