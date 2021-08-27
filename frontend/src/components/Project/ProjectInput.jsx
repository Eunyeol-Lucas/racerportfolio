import React from "react";
import * as Main from '../Components'
import { GiCancel } from "react-icons/gi";
import { BiSave } from "react-icons/bi";

export default function ProjectInput({
  setTitle,
  setContent,
  onSubmit,
  projectList,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  setIsToggle,
}) {
  return (
    <div>
      <h2>프로젝트</h2>
      <div>
        {projectList &&
          projectList.map((award, idx) => (
            <div key={`award-${idx}`}>
              <form>
                <p>
                  <Main.UserInput
                    type="text"
                    name="title"
                    onChange={(e) => setTitle(e.target.value)}
                    defaultValue={award.title}
                    required="required"
                  />
                </p>
                <p>
                  <Main.UserInput
                    type="text"
                    name="description"
                    onChange={(e) => setContent(e.target.value)}
                    defaultValue={award.content}
                    required="required"
                  />
                </p>

                <input
                  type="date"
                  name="startDate"
                  onChange={(e) => setStartDate(e.target.value)}
                  defaultValue={award.start_date}
                  required="required"
                />
                <input
                  type="date"
                  name="endDate"
                  onChange={(e) => setEndDate(e.target.value)}
                  defaultValue={award.end_date}
                  required="required"
                />
              </form>
              <Main.Hr />
            </div>
          ))}
      </div>
      <form onSubmit={onSubmit}>
        <p>
          <Main.UserInput
            type="text"
            name="title"
            placeholder="프로젝트 명"
            onChange={(e) => setTitle(e.target.value)}
            required="required"
          />
        </p>
        <p>
          <Main.UserInput
            type="text"
            name="content"
            placeholder="상세 내역"
            onChange={(e) => setContent(e.target.value)}
            required="required"
          />
        </p>
        <p>
          <input
            type="date"
            name="startDate"
            onChange={(e) => setStartDate(e.target.value)}
            required="required"
          />
          <input
            type="date"
            name="endDate"
            onChange={(e) => setEndDate(e.target.value)}
            required="required"
          />
        </p>
        <Main.TransButton type="submit">
          <BiSave />
        </Main.TransButton>
      </form>

      <Main.TransButton onClick={() => setIsToggle(true)}>
        <GiCancel />
      </Main.TransButton>
    </div>
  );
}
