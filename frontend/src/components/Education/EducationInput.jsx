import React from "react";
import * as Main from '../Components'
import { BiSave } from "react-icons/bi";
import { GiCancel } from "react-icons/gi";
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
      <h2>학력</h2>
      <div>
        {educationList &&
          educationList.map((education, idx) => (
            <div key={`edu-${idx}`}>
              <form>
                <p>
                  <Main.UserInput
                    type="text"
                    name="name"
                    onChange={(e) => setSchool(e.target.value)}
                    defaultValue={education.school}
                    required="required"
                  />
                </p>
                <p>
                  <Main.UserInput
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
              <Main.Hr />
            </div>
          ))}
      </div>
      <div>
        <form onSubmit={onSubmit}>
          <p>
            <Main.UserInput
              type="text"
              name="name"
              onChange={(e) => setSchool(e.target.value)}
              placeholder="학교 이름"
              required="required"
            />
          </p>
          <p>
            <Main.UserInput
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
          <Main.TransButton type="submit"><BiSave /></Main.TransButton>
        </form>
      </div>
      <Main.TransButton onClick={() => setIsToggle(true)}><GiCancel /></Main.TransButton>
    </div>
  );
}
