import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  border: 1px solid #f0f1f3;
  border-radius: 8px;
  width: 250px;
  height: 309px;
  box-sizing: border-box;
  padding: 32px 24px 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  transition: all 300ms ease-in-out;
  -moz-transition: all 300ms ease-in-out; /* Firefox 4 */
  -webkit-transition: all 300ms ease-in-out; /* Safari and Chrome */
  -o-transition: all 300ms ease-in-out; /* Opera */
  -ms-transition: all 300ms ease-in-out; /* Explorer 10 */
  bottom: 0px;
  box-shadow: 0 6px 12px -2px rgba(50, 50, 93, 0.25),
    0 3px 7px -3px rgba(0, 0, 0, 0.3);

  /* bottom: 0; */

  :hover {
    transition: all 300ms ease-in-out;
    -moz-transition: all 300ms ease-in-out; /* Firefox 4 */
    -webkit-transition: all 300ms ease-in-out; /* Safari and Chrome */
    -o-transition: all 300ms ease-in-out; /* Opera */
    -ms-transition: all 300ms ease-in-out; /* Explorer 10 */
    bottom: 10px;
  }
`;

export const Username = styled.h5`
  font-weight: bold;
  font-size: 23px;
  line-height: 1px;
  color: #151618;
  margin-bottom: 15px;
`;

export const Introduction = styled.p`
  color: #5e5f61;
  font-size: 18px;
  line-height: 22px;
`;

export const UserCardIcon = styled.img`
  width: 110px;
  height: 110px;

  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;
  margin-top: 10px;
  border-radius: 50%;
  box-shadow: 0 6px 12px -2px rgba(50, 50, 93, 0.25),
    0 3px 7px -3px rgba(0, 0, 0, 0.3);
`;

export function Corner() {
  return (
    <OuterCorner>
      <div />
    </OuterCorner>
  );
}

const OuterCorner = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 70px;
  height: 70px;
  background-color: white;
  box-shadow: inset 10px -10px 20px rgba(95, 95, 95, 0.1);
  border-radius: 0px 8px 0px 32px;

  > div {
    transition: all 200ms ease-in-out 0ms;
    position: absolute;
    width: 36px;
    height: 36px;
    left: 0;
    bottom: 0;
    background: #f4f4f4;
    box-shadow: inset 10px -10px 20px rgba(95, 95, 95, 0.07);
    border-radius: 0px 8px 0px 32px;
  }

  :hover > div {
    width: 52px;
    height: 52px;
    background-color: #0a82ff;
  }
`;

export const Button = styled.button`
  margin-left: auto;
  margin-right: auto;
  font-size: 22px;
  line-height: 22px;
  background-color: #0a82ff;
  color: white;
  width: 130px;
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
