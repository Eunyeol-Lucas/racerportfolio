import styled from "styled-components";
import MagnifyingGlass from "./icons/MagnifyingGlass.jsx";

// 이곳에 컨테이너 스타일을 넣으세요
const Container = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 12px;

  svg {
    position: absolute;
    top: 15px;
    left: 12px;
  }
`;

// 이곳에 Input의 스타일을 넣으세요
const Input = styled.input`
  padding: 11px 11px 11px 39px;
  border: 1px solid #c9cacc;
  border-radius: 4px;
  height: 46px;
  box-sizing: border-box;
  width: 100%;
  font-size: 14px;
  line-height: 22px;
  color: #7d7e80;
`;

SearchTextField.defaultProps = {
  value: "",
  onChange: () => {},
};

// Debounce를 이용하여 검색창 API호출 지연시킴
// 검색창 값이 바뀔 때 마다 API호출을 하면 너무많은 요청을 보내기 때문에 서버에 과부화가 걸릴 수 있다. 
// 웹클라이언트에서 debounce를 이용하여서 요청 보내는 횟수를 적절히 조절
function debounce(func, timeout) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

// 네트워크 검색창 기능
export default function SearchTextField({setSearch }) {
  const debouncedOnChange = debounce(setSearch, 300);
  return (
    <Container>
      <MagnifyingGlass />
      <Input
        placeholder="이름으로 검색하기"
        onChange={(e) => {
          debouncedOnChange(e.target.value);
        }}
      />
    </Container>
  );
}
