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

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  width: 1232px;
  margin: auto;
  padding-top: 100px;
  flex-direction: column;
`;

const UserContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 398px);
  grid-column-gap: 19px;
  grid-row-gap: 32px;
`;

export default function Network() {
  const [cardData, setCardData] = useState([]);
  const [totalCardCount, setTotalCardCount] = useState(0);
  const [search, setSearch] = useState("");


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
    <Container>
      <SearchTextField search={search} setSearch={setSearch} />
      <UserCount count={totalCardCount} />
      <UserContainer>
        {cardData.filter((data) => {
          if (search === null) {
            return data
          } 
          else if (data.username.includes(search)) {
            return data
          }
          return false;
        })
          .map((user, i) => (
          <UserCard
            profile_image={user.profile_image}
            username={user.username}
            introduction={user.introduction}
            id = {user.id}
            key={`user-card-${i}`}
          />
        ))}
      </UserContainer>
    </Container>
  );
}
