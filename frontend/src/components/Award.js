import React, { useState, useEffect } from "react";
import AwardList from "./Award/AwardList";
import AwardInput from "./Award/AwardInput";
import styled from "styled-components";
import axios from "axios";
import authHeader from "../modules/authHeader";

const Award = () => {
  const [awardList, setAwardList] = useState([]);
  const [awardName, setAwardName] = useState("");
  const [awardDescription, setAwardDescription] = useState("");
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
  }, [isToggle]);

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(awardName, awardDescription);
    if (awardName === "" || awardDescription === "") { setIsToggle(true); return;}
    const body = { name: awardName, description: awardDescription };
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/award`,
        body,
        { headers: authHeader() }
      );
      console.log(response);
      setIsToggle(true)
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
          <button onClick={() => setIsToggle(false)}>수정하기</button>
        </div>
      ) : (
        <AwardInput
          awardName={awardName}
          awardDescription={awardDescription}
          setAwardName={setAwardName}
          setAwardDescription={setAwardDescription}
          onSubmit={onSubmit}
          awardList={awardList}
          setIsToggle={setIsToggle}
        />
      )}
    </Container>
  );
};

export default Award;

const Container = styled.div`
  background-color: orange;
`;
