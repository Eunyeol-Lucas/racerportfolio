import React from "react";

export default function CertificateList({ certificateList, setIsToggle }) {
  return (
    <div>
      {certificateList &&
        certificateList.map((certificate, idx) => {
          return (
            <div key={`certificate-${idx}`}>
              <p style={{ display: "none" }}>{certificate.id}</p>
              <p>{certificate.name}</p>
              <p>{certificate.certified_by}</p>
              <p>{certificate.certified_date}</p>
              <hr />
            </div>
          );
        })}
    </div>
  );
}
