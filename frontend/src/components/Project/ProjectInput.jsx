import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const CreateProjectInput = ({
  title,
  content,
  onChange,
  onSave,
  onSubmit,
  start_date,
  end_date,
  projectList,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) => {
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
      <ProjectInput
        countList={countList}
        title={title}
        content={content}
        start_date={start_date}
        end_date={end_date}
        onChange={onChange}
        onSave={onSave}
        onSubmit={onSubmit}
        projectList={projectList}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />
      <button onClick={onAddDetailDiv}>추가</button>
    </div>
  );
};

function ProjectInput({
  countList,
  name,
  content,
  onChange,
  onSave,
  onSubmit,
  awardList,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) {
  return (
    <div>
      <div>
        {awardList &&
          awardList.map((award, idx) => (
            <div key={idx}>
              <form onSubmit={onSubmit}>
                <p>
                  <input
                    key={`${idx}-${award.id}`}
                    name="id"
                    type="text"
                    onChange={onChange}
                    value={award.id}
                    style={{ display: "none" }}
                  />
                </p>
                <p>
                  <input
                    key={`${idx}-${award.name}`}
                    type="text"
                    name="title"
                    onChange={onChange}
                    defaultValue={award.name}
                    required="required"
                  />
                </p>
                <p>
                  <input
                    key={`${idx}-${content}`}
                    type="text"
                    name="description"
                    placeholder="상세 내역"
                    onChange={onChange}
                    value={award.content}
                    required="required"
                  />
                </p>
                <DatePicker
                  selected={award.start_date}
                  name="start_date"
                  dateFormat="yyyy-MM-dd"
                  closeOnScroll={true}
                  onChange={(date) => setStartDate(date)}
                />
                <DatePicker
                  selected={award.end_date}
                  name="end_date"
                  dateFormat="yyyy-MM-dd"
                  closeOnScroll={true}
                  onChange={(date) => setEndDate(date)}
                />
                <button key={idx} type="submit">
                  수정완료
                </button>
              </form>
              <hr />
            </div>
          ))}
      </div>
      

      <div>
        {countList &&
          countList.map((_, idx) => (
            <div key={idx}>
              <form onSubmit={onSave}>
                <p key={`${idx}-${name}`}>
                  <input
                    type="text"
                    name="title"
                    placeholder="프로젝트 명"
                    onChange={onChange}
                    value={name}
                    required="required"
                  />
                </p>
                <p>
                  <input
                    key={`${idx}-${content}`}
                    type="text"
                    name="content"
                    placeholder="상세 내역"
                    onChange={onChange}
                    value={content}
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
                
                <button type="submit">이거 저장</button>
              </form>
            </div>
          ))}
      </div>
      <button onClick={onSubmit}>제출</button>
    </div>
  );
}

export default CreateProjectInput;
