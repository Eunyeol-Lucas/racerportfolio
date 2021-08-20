import React from "react";
// 로그아웃 기능을 위해 임시 구현 Home
export default function Home() {
  return (
    <>
      {window.localStorage.getItem("token") && (
        <button
          onClick={() => {
            window.localStorage.removeItem("token");
            window.location.href = "/login";
          }}
        >
          로그아웃
        </button>
      )}
    </>
  );
}
