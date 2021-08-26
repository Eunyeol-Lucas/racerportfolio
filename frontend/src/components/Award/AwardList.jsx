import React from "react";
// import { BiEditAlt } from "react-icons/bi";

export default function AwardList({ awardList, setIsToggle }) {
  return (
    <div>
      {awardList &&
        awardList.map((award, idx) => {
          return (
            <div key={`award-${idx}`}>
              <p style={{ display: "none" }}>
                {award.id}
              </p>
              <p>{award.name}</p>
              <p>{award.description}</p>
              {awardList.length > 1 + idx && <hr />}
            </div>
          );
        })}
    </div>
  );
}
