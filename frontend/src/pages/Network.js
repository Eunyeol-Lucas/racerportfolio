import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import {
  UserCount,
  UserCard,
  SearchTextField,
} from "../networkComponents/allNetworkComponents";
import authHeader from "../modules/authHeader";
import TokenCheck from "../modules/authToken";

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 80vw;
  margin: auto;
  padding-top: 150px;
  flex-direction: column;
`;

const UserContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 3fr);
  grid-column-gap: 20px;
  grid-row-gap: 32px;
  @media only screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 2fr);
    grid-column-gap: 18px;
  }
  @media only screen and (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 0;
  }
`;

export default function Network() {
  const [cardData, setCardData] = useState([]);
  const [totalCardCount, setTotalCardCount] = useState(0);
  const [search, setSearch] = useState("");
  const [checkToken, setCheckToken] = useState(false)


  useEffect(() => {
    (async function () {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/profile/users`,
        { headers: authHeader() }
      );
      setTotalCardCount(response.data.length);
      setCardData(response.data);
    })();
  }, []);

  return (
    <>
      <TokenCheck setCheckToken={setCheckToken} checkToken={checkToken} />
      <Container>
        <SearchTextField search={search} setSearch={setSearch} />
        <UserCount count={totalCardCount} />
        <UserContainer>
          {cardData
            .filter((data) => {
              if (search === null) {
                return data;
              } else if (data.username.includes(search)) {
                return data;
              }
              return false;
            })
            .map((user, i) => (
              <UserCard
                profile_image={user.profile_image}
                username={user.username}
                introduction={user.introduction}
                id={user.id}
                key={`user-card-${i}`}
              />
            ))}
        </UserContainer>
      </Container>
    </>
  );
}
