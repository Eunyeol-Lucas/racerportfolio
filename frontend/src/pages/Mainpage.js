import axios from "axios";
import React, { useState, useEffect } from "react";
import authHeader from "../modules/authHeader";
// Racer 정보 및 수정 업로드 기능 page
export default function Mainpage() {
  const [file, setFile] = useState({ file: null, uploading: false });
  const [introduction, setIntroduction] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/profile", { headers: authHeader() })
      .then((res) => console.log("res", res));
  });

  const onhandlerChange = async(event) => {
    if (file.file !== null) {
      URL.revokeObjectURL(file);
    }
    setFile({
            file: URL.createObjectURL(event.target.files[0]),
            uploading: true
        });

    const imageFile = Array.from(event.target.files);
    const formData = new FormData();
    formData.append("file", imageFile[0]);
    const response = await axios.post(
      "http://localhost:5000/profile",
      formData,
      { headers: authHeader() }
    );
    console.log(response)
    // const data = await response.json();
    // setFile({
    //   file: `data:image/jpeg;base64, ${data["data"]}`,
    //   uploading: true,
    // });
  }

  return (
    <div>
      <div>
        <img src={file.file} alt="#" />
        <input type="file" accept="image/*" onChange={onhandlerChange} />
        <input
          type="text"
          value={introduction}
          onChange={(e) => setIntroduction(e.target.value)}
        />
      </div>
    </div>
  );
}
