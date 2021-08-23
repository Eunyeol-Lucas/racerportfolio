import React, { useEffect } from "react";
import axios from "axios";
import authHeader from "./authHeader";

export default function tokenCheck() {
  axios
    .get(`${process.env.REACT_APP_BASE_URL}/user`,{ headers: authHeader() })
    .then((res) => console.log("auth", res));
}
