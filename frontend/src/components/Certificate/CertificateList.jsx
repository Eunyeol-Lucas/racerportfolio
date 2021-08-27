import React from "react";
import * as Main from '../Components'

export default function CertificateList({ certificateList }) {
  return (
    <div>
      <h2>자격증</h2>
      {certificateList &&
        certificateList.map((certificate, idx) => {
          return (
            <div key={`certificate-${idx}`}>
              <p style={{ display: "none" }}>{certificate.id}</p>
              <Main.MainP>{certificate.name}</Main.MainP>
              <p>{certificate.certified_by}</p>
              <p>{certificate.certified_date}</p>
              {certificateList.length > 1 + idx && <Main.Hr />}
            </div>
          );
        })}
    </div>
  );
}
