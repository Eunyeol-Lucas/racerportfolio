import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
  top: 50px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  background-color: white;
  margin: 0 auto 0;
  width: ${(props) => (props.large ? 400 : 300)}px;
  height: ${(props) => (props.large ? 600 : 500)}px;
  border-radius: 15px;
  box-shadow: 0 6px 12px -2px rgba(50, 50, 93, 0.25),
    0 3px 7px -3px rgba(0, 0, 0, 0.3);
`;

export const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  height: 106.33px;
`;

export const Inputbox = styled.input`
  width: ${(props) => (props.large ? 260 : 200)}px;
  height: 40px;
  padding-left: 30px;
  font-size: 15px;
  /* &:focus {
    outline: none;
  } */
  ${(props) => {
    if (props.idCheck === false) {
      return css`
        border: 3px solid red;
        border-radius: 5px;
      `;
    }
    if (props.idValidate === false) {
      return css`
        border: 3px solid red;
        border-radius: 5px;
      `;
    }
    if (props.passwordVali === false) {
      return css`
        border: 3px solid red;
        border-radius: 5px;
      `;
    }
    if (props.passwordError === true) {
      return css`
        border: 3px solid red;
        border-radius: 5px;
      `;
    }
    if (props.usernameCheck === false) {
      return css`
        border: 3px solid red;
        border-radius: 5px;
      `;
    }
  }}
`;

export const Button = styled.button`
  display: flex;
  margin-left: auto;

  align-items: center;
  justify-content: center;
  font-size: 22px;
  line-height: 22px;
  background-color: #0a82ff;
  color: white;
  min-width: ${(props) => (props.large ? 120 : 100)}px;
  height: 40px;
  border-radius: 5px;
  border: none;
  outline: none;
  box-shadow: 0 6px 12px -2px rgba(50, 50, 93, 0.25),
    0 3px 7px -3px rgba(0, 0, 0, 0.3);

  &:hover {
    cursor: pointer;
  }

  &:active {
    background-color: #0a6eff;
    outline: none;
  }
`;

export const Label = styled.label`
  margin-bottom: 10px;
  margin-right: auto;
  font-size: 16px;
  font-weight: 500;
`;

export const Hr = styled.hr`
  width: 600px;
`;
export const MainP = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

export const InformContainer = styled.div`
top: 50px;
  height: 80px;
  position: relative;
`;
