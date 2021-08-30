import React from "react";
import * as Main from '../Components';

export default function AwardList({ awardList, setIsToggle }) {
  return (
    <div>
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
    </div>
  );
}


