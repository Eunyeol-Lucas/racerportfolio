import React from "react";

export default function CertificateList({ certificateList, setIsToggle }) {
  return (
    <div>
      {certificateList &&
        certificateList.map((certificate, idx) => {
          return (
            <div key={idx}>
              <p key={`${idx}-${certificate.id}`} style={{ display: "none" }}>
                {certificate.id}
              </p>
              <p key={`${idx}-${certificate.name}`}>{certificate.name}</p>
              <p key={`${idx}-${certificate.certified_by}`}>
                {certificate.certified_by}
              </p>
              <p key={`${idx}-${certificate.certified_date}`}>
                {certificate.certified_date}
              </p>
              <hr />
            </div>
          );
        })}
    </div>
  );
}
