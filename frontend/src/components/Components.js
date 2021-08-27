import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  top: 50px;
  display: flex;
  padding: 50px;
  align-items: center;
  background-color: white;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  min-width: 700px;
  min-height: 400px;
  border-radius: 15px;
  box-shadow: 0 6px 12px -2px rgba(50, 50, 93, 0.25),
    0 3px 7px -3px rgba(0, 0, 0, 0.3);
`;

export const Hr = styled.hr`
  width: 600px;
`;
export const MainP = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

export const UserInput = styled.input`
  width: 400px;
  height: 30px;
  font-size: 18px;
`;

export const TransButton = styled.button`
  border: none;
  outline: 0;
  background-color: transparent;
  font-size: 30px;

  &:hover {
    top: 20px;
    left: 20px;
    color: gray;
    cursor: pointer;
  }
`;
