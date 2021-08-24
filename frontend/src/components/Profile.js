import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  // const auth = useSelector((state) => state.auth);

  return (
    <div>
      <div>
        <img alt="" />
        <p> 이름 </p>
        <span> 한줄 소개 </span>
        <button> 수정 </button>
      </div>
      <div>
        <input type="file" accept="image/*" />
        <input type="text" placeholder="한줄 소개" />
      </div>
    </div>
  );
};

export default Profile;
