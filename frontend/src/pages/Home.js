import React from 'react';

export default function Home(){

  return (
    <>
      {window.localStorage.getItem("users") && (
        <button onClick={() => {window.localStorage.removeItem("users");}}>
          로그아웃
        </button>
      )}
    </>
  );

}