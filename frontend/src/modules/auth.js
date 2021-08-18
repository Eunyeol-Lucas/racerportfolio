import React from 'react';

export default login = ({ userId, password }) => {
  const body = {
    userId,
    password,
  };
  axios
    .post("http://localhost:5000/login", body)
    .then((res) => {
      console.log(res.data);
        
      if (res.data.result === "success") {
        return res.data.token
      } else {
        return undefined
      }
 })
}