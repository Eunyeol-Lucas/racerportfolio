import React from "react";

export default function CertificateInput({
  certificateList,
  setName,
  setCertified_by,
  setCertified_date,
  onSubmit,
  setIsToggle,
}) {
  return (
    <div>
      <div>
        {certificateList &&
          certificateList.map((certificate, idx) => (
            <div key={`certificate-${idx}`}>
              <form>
                <p>
                  <input
                    type="text"
                    name="name"
                    onChange={(e) => setName(e.target.name)}
                    defaultValue={certificate.name}
                    required="required"
                  />
                </p>
                <p>
                  <input
                    type="text"
                    name="certified_by"
                    onChange={(e) => setCertified_by(e.target.value)}
                    defaultValue={certificate.certified_by}
                    required="required"
                  />
                </p>
                <p>
                  <input
                    type="text"
                    name="certified_date"
                    defaultValue={certificate.certified_date}
                    onChange={(e) => setCertified_date(e.target.value)}
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
        <form onSubmit={onSubmit}>
          <p>
            <input
              type="text"
              name="name"
              placeholder="자격증 명"
              onChange={(e) => setName(e.target.value)}
              required="required"
            />
          </p>
          <p>
            <input
              type="text"
              name="certified_by"
              placeholder="취득 기관"
              onChange={(e) => setCertified_by(e.target.value)}
              required="required"
            />
          </p>
          <p>
            <input
              type="date"
              name="certified_by"
              placeholder="자격증 취득일"
              onChange={(e) => setCertified_date(e.target.value)}
              required="required"
            />
          </p>
          <button type="submit">저장</button>
        </form>
        <button onClick={() => setIsToggle(true)}>돌아가기</button>
      </div>
    </div>
  );
}
