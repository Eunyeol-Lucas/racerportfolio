import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

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
      <div>
        {projectList &&
          projectList.map((award, idx) => (
            <div key={`award-${idx}`}>
              <form>
                <p>
                  <input
                    type="text"
                    name="title"
                    onChange={(e) => setTitle(e.target.value)}
                    defaultValue={award.title}
                    required="required"
                  />
                </p>
                <p>
                  <input
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
              <hr />
            </div>
          ))}
      </div>
      <form onSubmit={onSubmit}>
        <p>
          <input
            type="text"
            name="title"
            placeholder="프로젝트 명"
            onChange={(e) => setTitle(e.target.value)}
            required="required"
          />
        </p>
        <p>
          <input
            type="text"
            name="content"
            placeholder="상세 내역"
            onChange={(e) => setContent(e.target.value)}
            required="required"
          />
        </p>

        <DatePicker
          selected={startDate}
          name="start_date"
          dateFormat="yyyy-MM-dd"
          closeOnScroll={true}
          onChange={(date) => setStartDate(date)}
          required="required"
        />
        <DatePicker
          selected={endDate}
          name="end_date"
          dateFormat="yyyy-MM-dd"
          closeOnScroll={true}
          onChange={(date) => setEndDate(date)}
          required="required"
        />

        <button type="submit">저장</button>
      </form>

      <button onClick={() => setIsToggle(true)}>돌아가기</button>
    </div>
  );
}
