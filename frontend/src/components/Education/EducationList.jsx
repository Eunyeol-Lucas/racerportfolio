import React from "react";
import * as Main from "../Components";
import styled from "styled-components";

export default function EducationList({ educationList }) {
  return (
    <div>
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
    </div>
  );
}

const Inline = styled.div`
  display: flex;
`