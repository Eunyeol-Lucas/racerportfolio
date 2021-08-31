import axios from "axios";
import React, { useEffect, useState } from "react";
import authHeader from "../modules/authHeader";
import ProfileList, {
  AwardList,
  EducationList,
  ProjectList,
  CertificateList,
} from "../components/ListComponents";
import styled from "styled-components";
import TokenCheck from "../modules/authToken";

export default function Users() {
  const [profile, setProfile] = useState("");
  const [file, setFile] = useState("");
  const [educationList, setEducationList] = useState([]);
  const [awardList, setAwardList] = useState([]);
  const [projectList, setProjectList] = useState([]);
  const [certificateList, setCertificateList] = useState([]);
  const [checkToken, setCheckToken] = useState(false);

  const user_id = window.location.href.split("/")[5];

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/api/profile/users/${user_id}`,
          { headers: authHeader() }
        );
        setProfile(response.data.users);
        setFile({
          file: `${process.env.REACT_APP_BASE_URL}/${response.data.users.profile_image}`,
        });
        setEducationList(response.data.education_list);
        setAwardList(response.data.award_list);
        setCertificateList(response.data.certificate_list);
        setProjectList(response.data.project_list);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <>
      <TokenCheck setCheckToken={setCheckToken} checkToken={checkToken} />
      <Container>
        <ProfileList
          file={file}
          username={profile.username}
          introduction={profile.introduction}
        />
        <div>
          <EducationList educationList={educationList} />
          <AwardList awardList={awardList} />
          <ProjectList projectList={projectList} />
          <CertificateList certificateList={certificateList} />
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  padding: 0;
  margin-left: auto;
  margin-right: auto;
  max-width: 1300px;
  justify-content: space-around;
  top: 100px;
`;

