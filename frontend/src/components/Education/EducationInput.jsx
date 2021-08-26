import React, { useState } from "react";

export default function EducationInput({
  educationList,
  setSchool,
  setMajor,
  setRadio,
  onSubmit,
  setIsToggle,
}) {
  return (
    <div>
      <div>
        {educationList &&
          educationList.map((education, idx) => (
            <div key={`edu-${idx}`}>
              <form>
                <p>
                  <input
                    type="text"
                    name="name"
                    onChange={(e) => setSchool(e.target.value)}
                    defaultValue={education.school}
                    required="required"
                  />
                </p>
                <p>
                  <input
                    type="text"
                    name="major"
                    onChange={(e) => setMajor(e.target.value)}
                    defaultValue={education.major}
                    required="required"
                  />
                </p>

                <div>
                  <input
                    type="radio"
                    name="status"
                    value={education.value}
                    onChange={(e) => setRadio(e.target.value)}
                    required="required"
                  />
                  <label htmlFor="01">재학중</label>

                  <input
                    type="radio"
                    name="status"
                    value={education.value}
                    onChange={(e) => setRadio(e.target.value)}
                    required="required"
                  />
                  <label htmlFor="02">졸업</label>

                  <input
                    type="radio"
                    name="status"
                    value={education.value}
                    onChange={(e) => setRadio(e.target.value)}
                    required="required"
                  />
                  <label htmlFor="03">석사졸업</label>

                  <input
                    type="radio"
                    name="status"
                    value={education.value}
                    onChange={(e) => setRadio(e.target.value)}
                    required="required"
                  />
                  <label htmlFor="04">박사졸업</label>
                </div>
              </form>
              <hr />
            </div>
          ))}
      </div>
      <div>
        <form onSubmit={onSubmit}>
          <p>
            <input
              type="text"
              name="name"
              onChange={(e) => setSchool(e.target.value)}
              placeholder="학교 이름"
              required="required"
            />
          </p>
          <p>
            <input
              type="text"
              name="major"
              onChange={(e) => setMajor(e.target.value)}
              placeholder="전공"
              required="required"
            />
          </p>
          <div>
            <input
              type="radio"
              name="status"
              value="재학중"
              onChange={(e) => setRadio(e.target.value)}
              required="required"
            />
            <label htmlFor="01">재학중</label>

            <input
              type="radio"
              name="status"
              value="졸업"
              onChange={(e) => setRadio(e.target.value)}
              required="required"
            />
            <label htmlFor="02">졸업</label>

            <input
              type="radio"
              name="status"
              value="석사졸업"
              onChange={(e) => setRadio(e.target.value)}
              required="required"
            />
            <label htmlFor="03">석사졸업</label>
            <input
              type="radio"
              name="status"
              value="박사졸업"
              onChange={(e) => setRadio(e.target.value)}
              required="required"
            />
            <label htmlFor="04">박사졸업</label>
          </div>
          <button type="submit">저장하기</button>
        </form>
      </div>
      <button onClick={() => setIsToggle(true)}>돌아가기</button>
    </div>
  );
}
