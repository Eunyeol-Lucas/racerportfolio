import React, { useState } from "react";

const CreateAwardInput = ({
  name,
  description,
  onChange,
  onSave,
  onSubmit,
  awardList,
  setAwardStatus,
  setIsToggle,
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
      <AwardInput
        countList={countList}
        name={name}
        description={description}
        onChange={onChange}
        onSave={onSave}
        onSubmit={onSubmit}
        awardList={awardList}
        setAwardStatus={setAwardStatus}
        setIsToggle={setIsToggle}
      />
      <button onClick={onAddDetailDiv}>추가</button>
    </div>
  );
};

function AwardInput({
  countList,
  name,
  description,
  onChange,
  onSave,
  onSubmit,
  awardList,
  setAwardStatus,
  setIsToggle,
}) {
  return (
    <div>
      <div>
        {awardList &&
          awardList.map((award, idx) => (
            <div key={idx}>
              <form onSubmit={onSave}>
                <p>
                  <input
                    key={`${idx}-${award.name}`}
                    type="text"
                    name="name"
                    onChange={onChange}
                    defaultValue={award.name}
                  />
                </p>
                <p>
                  <input
                    key={`${idx}-${award.description}`}
                    type="text"
                    name="description"
                    onChange={onChange}
                    defaultValue={award.description}
                  />
                </p>
                <button key={idx} type="submit">
                  이거 저장
                </button>
              </form>
              <hr />
            </div>
          ))}
      </div>
      <div>
        <form onSubmit={onSave}>
          <p>
            <input
              type="text"
              name="name"
              onChange={onChange}
              placeholder="수상 내역"
            />
          </p>
          <p>
            <input
              type="text"
              name="description"
              onChange={onChange}
              placeholder="상세 내역"
            />
          </p>
          <button type="submit">이거 저장</button>
        </form>
      </div>

      <div>
        {countList &&
          countList.map((_, idx) => (
            <div key={idx}>
              <form onSubmit={onSave}>
                <p key={`${idx}-${name}`}>
                  <input
                    type="text"
                    name="name"
                    placeholder="수상 내역"
                    onChange={onChange}
                    
                  />
                </p>
                <p key={`${idx}-${description}`}>
                  <input
                    type="text"
                    name="description"
                    placeholder="상세 내역"
                    onChange={onChange}
                    
                  />
                </p>
                <button type="submit">이거 저장</button>
              </form>
            </div>
          ))}
      </div>
      <button onClick={onSubmit}>제출</button>
    </div>
  );
}

export default CreateAwardInput;
