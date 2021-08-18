import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import authHeader from "../modules/authHeader";


export default function Mainpage() {

    useEffect(() => {
        axios.get("http://localhost:5000/main", { headers: authHeader() })
        .then(res => console.log(res))
    })


  return (
    <div>
      <div>
        <input
          type="file"
          className="imgInput"
          id="logoImg"
          accept="image/*"
          name="file"
        />
      </div>
    </div>
  );
}
