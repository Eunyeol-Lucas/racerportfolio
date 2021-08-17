import React from 'react';




const loginDB = (id, password) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: "post",
      url: "http://13.125.249.241/user/login",
      data: {
        email: id,
        password: password,
      },
    })
      .then((res) => {
        console.log(res);
        dispatch(
          setUser({
            email: res.data.email,
            nickname: res.data.nickname,
          })
        );
        const accessToken = res.data.token;
        //쿠키에 토큰 저장
        setCookie("is_login", `${accessToken}`);
        document.location.href = "/";
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
