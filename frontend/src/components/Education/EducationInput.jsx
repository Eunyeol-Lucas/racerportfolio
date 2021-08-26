import React, { useState } from "react";

const CreateEducationInputList = ({ educationList, setIsToggle }) => {
  const [countList, setCountList] = useState([]);

  const onAddDetailDiv = () => {
    let countArr = [...countList];
    let counter = countArr.slice(-1)[0];
    counter += 1;
    countArr.push(counter);
    setCountList(countArr);
  };

  return (
    <div>
      <EducationInput countList={countList} educationList={educationList} setIsToggle={setIsToggle} />
      <button onClick={onAddDetailDiv}>추가</button>
    </div>
  );
};

function EducationInput({
  educationList,
  countList,
  school,
  major,
  status,
  onChange,
  onSubmit,
  setIsToggle,
}) {
  return (
    <div>
      <div>
        {educationList &&
          educationList.map((education, idx) => (
            <div key={idx}>
              <p>
                <input
                  key={`${idx}-${education.school}`}
                  type="text"
                  name="name"
                  onChange={onChange}
                  defaultValue={education.school}
                />
              </p>
              <p>
                <input
                  key={`${idx}-${education.major}`}
                  type="text"
                  name="major"
                  onChange={onChange}
                  defaultValue={education.major}
                />
              </p>

              <div>
                <input type="checkbox" id="01" name="status" value="1" />
                <label htmlFor="01">재학중</label>

                <input type="checkbox" id="02" name="status" value="2" />
                <label htmlFor="02">학사졸업</label>

                <input type="checkbox" id="03" name="status" value="3" />
                <label htmlFor="03">석사졸업</label>

                <input type="checkbox" id="04" name="status" value="4" />
                <label htmlFor="04">박사졸업</label>
              </div>

              <hr />
            </div>
          ))}
      </div>
      <div>
        <p>
          <input
            type="text"
            name="name"
            onChange={onChange}
            placeholder="학교 이름"
          />
        </p>
        <p>
          <input
            type="text"
            name="major"
            onChange={onChange}
            placeholder="전공"
          />
        </p>

        <div>
          <input type="checkbox" id="01" name="status" value="1" />
          <label htmlFor="01">재학중</label>

          <input type="checkbox" id="02" name="status" value="2" />
          <label htmlFor="02">학사졸업</label>

          <input type="checkbox" id="03" name="status" value="3" />
          <label htmlFor="03">석사졸업</label>

          <input type="checkbox" id="04" name="status" value="4" />
          <label htmlFor="04">박사졸업</label>
        </div>
      </div>
      <div>
        {countList &&
          countList.map((_, idx) => (
            <div key={idx}>
              <p key={`${idx}-${school}`}>
                <input
                  type="text"
                  name="name"
                  placeholder="학교 이름"
                  onChange={onChange}
                  value={school}
                />
              </p>
              <p>
                <input
                  key={`${idx}-${major}`}
                  type="text"
                  name="major"
                  placeholder="전공"
                  onChange={onChange}
                  value={major}
                />
              </p>
              <div>
                <input type="checkbox" id="01" name="status" value="1" />
                <label htmlFor="01">재학중</label>

                <input type="checkbox" id="02" name="status" value="2" />
                <label htmlFor="02">학사졸업</label>

                <input type="checkbox" id="03" name="status" value="3" />
                <label htmlFor="03">석사졸업</label>

                <input type="checkbox" id="04" name="status" value="4" />
                <label htmlFor="04">박사졸업</label>
              </div>
            </div>
          ))}
      </div>
      <button onClick={() => setIsToggle(true)}>저장하기</button>
    </div>
  );
}

export default CreateEducationInputList;

