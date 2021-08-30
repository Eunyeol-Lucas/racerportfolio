import React from "react";
import * as Main from '../Components'
import { BiSave } from "react-icons/bi";
import { GiCancel } from "react-icons/gi";

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
      <h2>자격증</h2>
      <div>
        {certificateList &&
          certificateList.map((certificate, idx) => (
            <div key={`certificate-${idx}`}>
              <form>
                <p>
                  <Main.UserInput
                    type="text"
                    name="name"
                    onChange={(e) => setName(e.target.name)}
                    defaultValue={certificate.name}
                    required="required"
                  />
                </p>
                <p>
                  <Main.UserInput
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
              placeholder="자격증 명"
              onChange={(e) => setName(e.target.value)}
              required="required"
            />
          </p>
          <p>
            <Main.UserInput
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
          <Main.TransButton type="submit"><BiSave /></Main.TransButton>
        </form>
        <Main.TransButton onClick={() => setIsToggle(true)}><GiCancel /></Main.TransButton>
      </div>
    </div>
  );
}
