import React, { useEffect } from "react";
import axios from "axios";
import authHeader from "./authHeader";

export default async function tokenCheck(url) {
  try {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/${url}`, {
      headers: authHeader(),
    });
    console.log("response", response);

  } catch (error) {
    console.log("error.response", error.response);
    if (error.response.status === 401) {
      alert("토큰이 만료되었습니다.");
      window.localStorage.removeItem("access_token")
    }
  }
}
