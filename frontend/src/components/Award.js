import React, { useState, useEffect } from "react";
import AwardList from "./Award/AwardList";
import AwardInput from "./Award/AwardInput";
import axios from "axios";
import authHeader from "../modules/authHeader";
import * as Main from './Components';
import { BiEditAlt } from "react-icons/bi";
import { useHistory } from "react-router-dom";

const Award = ({setCheckToken}) => {
  const [awardList, setAwardList] = useState([]);
  const [awardName, setAwardName] = useState("");
  const [awardDescription, setAwardDescription] = useState("");
  const [isToggle, setIsToggle] = useState(true);
  
  const history = useHistory();
  useEffect(() => {
    const requestUserAward = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/api/award`,
          { headers: authHeader() }
        );
        setAwardList(response.data);
      } catch (err) {
        if (err.response.status === 401) {
          setCheckToken(true);
          setTimeout(() => {
            history.push("/logout");
          }, 2000);
        }
      }
    };
    requestUserAward();
  }, [isToggle]);

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(awardName, awardDescription);
    if (awardName === "" || awardDescription === "") {
      setIsToggle(true);
      return;
    }
    const body = { name: awardName, description: awardDescription };
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/award`,
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
          <AwardList awardList={awardList} setIsToggle={setIsToggle} />
          <Main.TransButton onClick={() => setIsToggle(false)}><BiEditAlt /></Main.TransButton>
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
    </Main.Container>
  );
};

export default Award;
