import React, { useState } from "react";

const CreateAwardInput = ({
  name,
  certified_by,
  certified_date,
  onChange,
  onSave,
  onSubmit,
  certificateList,
  setCertificateStatus,
  setIsToggle,
  onEdit,
  onSubmitEdit,
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
        certified_by={certified_by}
        certified_date={certified_date}
        onChange={onChange}
        onSave={onSave}
        onSubmit={onSubmit}
        certificateList={certificateList}
        setCertificateStatus={setCertificateStatus}
        setIsToggle={setIsToggle}
        onEdit={onEdit}
        onSubmitEdit={onSubmitEdit}
      />
      <button onClick={onAddDetailDiv}>추가</button>
    </div>
  );
};

function AwardInput({
  countList,
  name,
  certified_by,
  certified_date,
  onChange,
  onSave,
  onSubmit,
  certificateList,
  setCertificateStatus,
  setIsToggle,
  onEdit,
  onSubmitEdit,
}) {
  return (
    <div>
      <div>
        {certificateList &&
          certificateList.map((certificate, idx) => (
            <div key={idx}>
              <form onSubmit={onSave}>
                <p>
                  <input
                    key={`${idx}-${certificate.id}`}
                    name="id"
                    type="text"
                    onChange={onEdit}
                    value={certificate.id}
                    style={{ display: "none" }}
                  />
                </p>
                <p>
                  <input
                    key={`${idx}-${certificate.name}`}
                    type="text"
                    name="name"
                    onChange={onEdit}
                    defaultValue={certificate.name}
                    required="required"
                  />
                </p>
                <p>
                  <input
                    key={`${idx}-${certificate.certified_by}`}
                    type="text"
                    name="certified_by"
                    onChange={onChange}
                    defaultValue={certificate.certified_by}
                    required="required"
                  />
                </p>
                <p>
                  <input
                    key={`${idx}-${certificate.certified_date}`}
                    type="text"
                    name="certified_date"
                    onChange={onChange}
                    defaultValue={certificate.certified_date}
                    required="required"
                  />
                </p>
                <button key={idx} type="submit">
                  수정하기
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
                    name="name"
                    placeholder="자격증 명"
                    onChange={onChange}
                    value={name}
                  />
                </p>
                <p>
                  <input
                    key={`${idx}-${certified_by}`}
                    type="text"
                    name="certified_by"
                    placeholder="취득 기관"
                    onChange={onChange}
                    value={certified_by}
                  />
                </p>
                <p>
                  <input
                    key={`${idx}-${certified_date}`}
                    type="text"
                    name="certified_by"
                    placeholder="자격증 취득일"
                    onChange={onChange}
                    value={certified_date}
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
