import React from "react";
import styled from "styled-components";
import * as Main from "./Components";
export default function ProfileList({
  file,
  username,
  introduction,
}) {
  return (
    <ProfileContainer>
      <h2>프로필</h2>
      <Img src={file.file} alt="#" />
      <h3>{username}</h3>
      <h4>{introduction}</h4>
    </ProfileContainer>
  );
}

const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: none;
  background-color: yellow;
`;

const ProfileContainer = styled.div`
  position: sticky;
  margin: 0;
  padding-top: 50px;
  top: 170px;
  justify-content: center;
  text-align: center;
  align-items: center;
  align-content: center;
  background-color: white;
  margin: 0 auto 0;
  width: 300px;
  height: 400px;
  border-radius: 15px;
  box-shadow: 0 6px 12px -2px rgba(50, 50, 93, 0.25),
    0 3px 7px -3px rgba(0, 0, 0, 0.3);
`;

export function EducationList({ educationList }) {
  return (
    <MainContainer>
      <h2>학력</h2>
      {educationList &&
        educationList.map((education, idx) => {
          return (
            <div key={idx}>
              <Main.MainP key={`${idx}-${education.school}`}>
                {education.school}
              </Main.MainP>
              <Inline>
                <p key={`${idx}-${education.major}`}>{education.major}   (</p>
                <p key={`${idx}-${education.status}`}>{education.status})</p>
              </Inline>
              {educationList.length > 1 + idx && <Main.Hr />}
            </div>
          );
        })}
    </MainContainer>
  );
}

const Inline = styled.div`
  display: flex;
`

export function AwardList({ awardList }) {
  return (
    <MainContainer>
      <h2>수상이력</h2>
      {awardList &&
        awardList.map((award, idx) => {
          return (
            <div key={`award-${idx}`}>
              <p style={{ display: "none" }}>{award.id}</p>
              <Main.MainP>{award.name}</Main.MainP>
              <p>{award.description}</p>
              {awardList.length > 1 + idx && <Main.Hr />}
            </div>
          );
        })}
    </MainContainer>
  );
}

export function ProjectList({ projectList }) {
  return (
    <MainContainer>
      <h2>프로젝트</h2>
      {projectList &&
        projectList.map((project, idx) => {
          return (
            <div key={idx}>
              <p style={{ display: "none" }}>{project.id}</p>
              <Main.MainP>{project.title}</Main.MainP>
              <p>{project.content}</p>
              <p>
                <span>{project.start_date}</span>
                <span> - </span>
                <span>{project.end_date}</span>
              </p>
              {projectList.length > 1 + idx && <Main.Hr />}
            </div>
          );
        })}
    </MainContainer>
  );
}

export function CertificateList({ certificateList }) {
  return (
    <MainContainer>
      <h2>자격증</h2>
      {certificateList &&
        certificateList.map((certificate, idx) => {
          return (
            <div key={`certificate-${idx}`}>
              <p style={{ display: "none" }}>{certificate.id}</p>
              <Main.MainP>{certificate.name}</Main.MainP>
              <p>{certificate.certified_by}</p>
              <p>{certificate.certified_date}</p>
              {certificateList.length > 1 + idx && <Main.Hr />}
            </div>
          );
        })}
    </MainContainer>
  );
}

const MainContainer = styled.div`
  position: relative;
  top: 50px;
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