import React from 'react';

export default function authHeader() {
  const users = JSON.parse(localStorage.getItem("users"));
  console.log("users", users.token)

  if (users && users.token) {
    return { Authorization: "Bearer " + users.token };
  } else {
    return {};
  }
}
