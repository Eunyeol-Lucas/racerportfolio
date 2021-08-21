import axios from "axios";
import React, { useState, useEffect } from "react";
import authHeader from "../modules/authHeader";
// Racer 정보 및 수정 업로드 기능 page
export default function Mainpage() {
  const [fileUrl, setFileUrl] = useState(null);
  
  useEffect(() => {
    axios
      .get("http://localhost:5000/profile", { headers: authHeader() })
      .then((res) => console.log("res", res));
  })
  
  function processImage(event) {
    const imageFile = event.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    setFileUrl(imageUrl);
    console.log(imageUrl)
  }


  return (
    <div>
      <div>
        <input type="file" accept="image/*" onChange={processImage} />
        <img src={fileUrl} alt="#" />
      </div>
    </div>
  );
}
