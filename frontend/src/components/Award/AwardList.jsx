import React from "react";
// import { BiEditAlt } from "react-icons/bi";

export default function AwardList({ awardList, setIsToggle }) {
  return (
    <div>
      {awardList &&
        awardList.map((award, idx) => {
          return (
            <div key={idx}>
              <p key={`${idx}-${award.id}`} style={{ display: "none" }}>
                {award.id}
              </p>
              <p key={`${idx}-${award.name}`}>{award.name}</p>
              <p key={`${idx}-${award.description}`}>{award.description}</p>
              <hr />
            </div>
          );
        })}
    </div>
  );
}
