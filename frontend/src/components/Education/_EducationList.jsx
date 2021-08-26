import React from "react";

export default function EducationList({ educationList }) {
  return (
    <div>
      <p>학력</p>
      <div>
        {educationList &&
          educationList.map((education, idx) => {
            return (
              <div key={idx}>
                <p key={`${idx}-${education.school}`}>{education.school}</p>
                <p key={`${idx}-${education.major}`}>{education.major}</p>
                <p key={`${idx}-${education.status}`}>{education.status}</p>
                <hr />
              </div>
            );
          })}
      </div>
    </div>
  );
}
