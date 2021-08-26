import React from "react";
import CertificateList from "./Certificate/CertificateList";
import CreateCertificateInput from "./Certificate/CertificateInput";
import styled from "styled-components";


const Certificate = () => {

  return (
    <Container>
      <h2>자격증</h2>
      <CertificateList />
      <CreateCertificateInput />
    </Container>
  );
};

export default Certificate;

const Container = styled.div`
  background-color: gray;
`