import React, { useEffect } from "react";
import axios from "axios";
import authHeader from "./authHeader";

export default function tokenCheck() {
  axios
    .post("http://localhost:5000/user","" ,{ headers: authHeader() })
    .then((res) => console.log("auth", res));
}
