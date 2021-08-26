import React from "react";

export default function ProjectList({ projectList }) {
  return (
    <div>
      {projectList &&
        projectList.map((project, idx) => {
          return (
            <div key={idx}>
              <p style={{ display: "none" }}>{project.id}</p>
              <p>{project.title}</p>
              <p>{project.content}</p>
              <p>
                <span>{project.start_date}</span>
                <span> - </span>
                <span>{project.end_date}</span>
              </p>
              <hr />
            </div>
          );
        })}
    </div>
  );
}
