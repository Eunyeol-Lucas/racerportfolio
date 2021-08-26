import React from "react";

export default function EducationList({ educationList , setIsToggle}) {
  return (
    <div>
        {educationList &&
          educationList.map((education, idx) => {
            return (
              <div key={ idx }>
                <p key={`${idx}-${education.school}`}>{education.school}</p>
                <p key={`${idx}-${education.major}`}>{education.major}</p>
                <p key={`${idx}-${education.status}`}>{education.status}</p>
                <hr />
              </div>
            );
          })}
      <button onClick={()=>setIsToggle(false)}>수정하기</button>
    </div>
  );
}


