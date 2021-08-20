import React from 'react';
// server 요청시 authorization 자동화 컴포넌트
export default function authHeader() {
  const token = JSON.parse(localStorage.getItem("token"));

  if (token) {
    return { Authorization: "Bearer " + token.access_token };
  } else {
    return {};
  }
}
