import React, { useState, useEffect } from "react";
import AwardList from "./Award/AwardList";
import CreateAwardInput from "./Award/AwardInput";
import styled from "styled-components";
import axios from "axios";
import authHeader from "../modules/authHeader";

const Award = () => {
  const [awardList, setAwardList] = useState([]);
  const [awardStatus, setAwardStatus] = useState({
    name: "",
    description: "",
  });
  const [awardSubmitList, setAwardSubmitList] = useState([]);
  const [awardEditList, setAwardEditList] = useState([]);
  const [awardEditStatus, setAwardEditStatus] = useState(null);
  const [isToggle, setIsToggle] = useState(true);

  useEffect(() => {
    const requestUserAward = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/award`,
          { headers: authHeader() }
        );
        console.log(response);
        setAwardList(response.data);
      } catch (err) {
        console.log(err.response);
      }
    };
    requestUserAward();
  }, []);
  
  const { name, description } = awardStatus;
  const onChange = (e) => {
    const { name, value } = e.target;
    setAwardStatus({
      ...awardStatus,
      [name]: value,
    });
  };

  const onSave = (e) => {
    e.preventDefault();
    if (awardStatus.name === "" || awardStatus.description === "")
      return alert("수상 이력을 입력해주세요.");
    setAwardSubmitList([...awardSubmitList, awardStatus]);
  };

  const onEdit = (e, idx) => {
    const { name, value } = e.target;
    setAwardEditStatus({
      ...awardEditStatus,
      [name]: value,
    });
  };

  const onSubmitEdit = async (e) => {
    e.preventDefault();
    console.log(awardEditStatus);
    try {
      const response = await axios.patch(
        `${process.env.REACT_APP_BASE_URL}/award`,
        awardEditStatus,
        { headers: authHeader() }
      );
      console.log(response);
    } catch (err) {
      console.log(err.response);
    }
  };

  const onSubmit = async () => {
    const body = { data: awardSubmitList };
    console.log(body);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/award`,
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
      <h2>수상이력</h2>
      {isToggle ? (
        <div>
          <AwardList awardList={awardList} setIsToggle={setIsToggle} />
          <button onClick={()=>setIsToggle(false)}>수정하기</button>
        </div>
      ) : (
        <CreateAwardInput
          name={name}
          description={description}
          onChange={onChange}
          onSave={onSave}
          onSubmit={onSubmit}
          awardList={awardList}
          setAwardStatus={setAwardStatus}
          setIsToggle={setIsToggle}
          onEdit={onEdit}
          onSubmitEdit={onSubmitEdit}
        />
      )}
    </Container>
  );
};

export default Award;

const Container = styled.div`
  background-color: orange;
`;
