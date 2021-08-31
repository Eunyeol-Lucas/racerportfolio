import React, { useEffect } from 'react';
import axios from "axios";
import authHeader from "./authHeader";
import { useHistory } from "react-router-dom";
import Banner from "react-js-banner";

export default function TokenCheck({ setCheckToken, checkToken }) {
  const history = useHistory();
  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/api/login/protect`,
          {
            headers: authHeader(),
          }
        );
      } catch (error) {
        if (error.response.status === 401) {
          setCheckToken(true);
          setTimeout(() => {
            history.push("/logout");
          }, 2000);
        }
      }
    })();
  }, []);

  return (
    <Banner
      showBanner={checkToken}
      css={{
        backgroundColor: "#ff4d4d",
        fontSize: 22,
        color: "white",
        top: "50px",
        position: "fixed",
        width: "100%",
        zIndex: 999
      }}
      title="토큰이 만료되었습니다."
    />
  );
}

