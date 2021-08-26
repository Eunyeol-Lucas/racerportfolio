import React from "react";

export default function ProjectList({ projectList }) {
  return (
    <div>
      {projectList &&
        projectList.map((project, idx) => {
          return (
            <div key={idx}>
              <p key={`${idx}-${project.id}`} style={{ display: "none" }}>
                {project.id}
              </p>
              <p key={`${idx}-${project.title}`}>{project.title}</p>
              <p key={`${idx}-${project.content}`}>{project.content}</p>
              <p key={`${idx}-${project.start_date}`}>
                {project.start_date}-{project.end_date}
              </p>
              <hr />
            </div>
          );
        })}
    </div>
  );
}
