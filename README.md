# racerportfolio
# 레이서 포트폴리오 프로젝트

### **프로젝트 설명**

레이서 포트폴리오 서비스는 사용자의 정보(이름, 학력, 수상이력 등)를 입력한 후, 검색을 통해 다른 사용자의 포트폴리오 정보를 확인할 수 있는 포트폴리오 웹 서비스입니다.

---

### Skills

- Flask
- MySQL
- JavaScript
- React.js
- axios
- styled-components

---

### 와이어 프레임

[레이서 포트폴리오사이트](https://whimsical.com/7ptF5aW1CDkJhALvKSAjp3)

---

**구현 기술**

**로그인**

- 유저로부터 아이디(이메일)와 비밀번호 정보를 입력받아 로그인
- 로그인한 유저에 대해 Token으로 관리(localStorage에 저장)

**회원가입**

- 유저로부터 아이디(이메일), 비밀번호, 이름 정보를 입력받아 회원가입
- 비밀번호와 비밀번호 확인의 값이 일치해야 함.
- 아이디는 이메일 형식으로만 정보를 입력 받아야 함.
- 이름은 한글, 영문으로만 입력 받아야 함.
- 비밀번호는 다음의 [링크1](https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/(%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4%EB%B3%B4%ED%98%B8%EC%9C%84%EC%9B%90%ED%9A%8C)%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4%EC%9D%98%EA%B8%B0%EC%88%A0%EC%A0%81%C2%B7%EA%B4%80%EB%A6%AC%EC%A0%81%EB%B3%B4%ED%98%B8%EC%A1%B0%EC%B9%98%EA%B8%B0%EC%A4%80/(2020-5,20200811))((개인정보보호위원회) 개인정보의 기술적·관리적 보호조치 기준)에 맞추어 영문, 숫자, 특수문자 중 2종류 이상을 조합하여 최소 10자리 이상의 길이로 구성해야 함.

<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/86ce01c7-cdb5-4d93-be54-de46fdc38dd1/Sep-04-2021_09-14-37.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20211028%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211028T091326Z&X-Amz-Expires=86400&X-Amz-Signature=45a4b84aa322bd401231191b27240df8624a6b5ce438fcd3b08bda48d6d8056d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Sep-04-2021%252009-14-37.gif%22" width=300px />

**로그아웃**

- 현재 로그인한 유저에 대해 로그아웃
- 로그아웃 시 저장된 token을 삭제

**내 포트폴리오 보기, 수정, 업로드**

- 학력: 학교이름, 전공 정보를 text 형식으로 입력  
학위에 대한 사항은 radio button을 통해 입력
- 수상 이력: 수상 내역과 상세내역을 text 형식으로 입력
- 프로젝트: 프로젝트 이름과 상세내역을 text 형식으로 입력
- 자격증: 자격증 이름, 공급기관을 text 형식으로 입력
- 모든 정보는 validation
- 프로필 이미지를 클릭하여 업로드 및 재업로드 가능

<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/fe28e61b-1da9-4208-a83e-0beacb6af1a8/Sep-04-2021_09-30-49.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20211028%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211028T091605Z&X-Amz-Expires=86400&X-Amz-Signature=b0e7143a91bac1d038cc8a1a0cbc1adc29d37fd2a6b1f5899f6d0b0e87d13883&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Sep-04-2021%252009-30-49.gif%22" width=300px />

**다른 유저 정보 검색**

- 다른 모든 유저의 정보를 네트워크 화면에서 로딩
- 유저 정보에서 정보보기 클릭시, 다른 유저의 정보를 볼 수 있는 "유저정보보기" 페이지로 이동
- 검색 창을 통해 이름을 입력하여 유저 검색
- 디바운스를 통해 검색 속도 조절

**유저 정보 보기 페이지**

- 내 포트폴리오 보기 페이지와 같이 대상 유저의 학력, 수상 이력, 프로젝트, 자격증 정보를 표시

<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/41480f98-4dfb-499a-b7ce-a38295ad787a/Sep-04-2021_09-34-01.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20211028%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211028T091627Z&X-Amz-Expires=86400&X-Amz-Signature=c9672b3e12f5c25ac84f3092d847075281af64be24ef00d5c9a1217445e9c0f6&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Sep-04-2021%252009-34-01.gif%22" width=300px />

### **발표 자료**

[레이서 포트폴리오 발표자료.pdf](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b6a1240e-c999-47a8-9b67-b498133dc7d8/레이서_포트폴리오_발표자료.pdf)
