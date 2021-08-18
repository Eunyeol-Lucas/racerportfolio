import React from 'react';

export default function Home(){

    return (
      <button onClick={() => window.localStorage.removeItem("users")}>
        로그아웃
      </button>
    );

}