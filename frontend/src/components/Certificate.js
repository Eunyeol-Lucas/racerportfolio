import React, { useState, useEffect } from "react";
import CertificateList from "./Certificate/CertificateList";
import CertificateInput from "./Certificate/CertificateInput";
import axios from "axios";
import authHeader from "../modules/authHeader";
import * as Main from './Components'
import { BiEditAlt } from "react-icons/bi";

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
          `${process.env.REACT_APP_BASE_URL}/api/certificate`,
          { headers: authHeader() }
        );
        setCertificateList(response.data);
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
    <Main.Container>
      {isToggle ? (
        <div>
          <CertificateList certificateList={certificateList} />
          <Main.TransButton onClick={() => setIsToggle(false)}><BiEditAlt /></Main.TransButton>
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
    </Main.Container>
  );
};

export default Certificate;


