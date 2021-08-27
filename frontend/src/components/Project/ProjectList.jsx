import React from "react";
import * as Main from '../Components'

export default function ProjectList({ projectList }) {
  return (
    <div>
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
    </div>
  );
}
