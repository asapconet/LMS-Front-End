import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, verifyToken } from "../API/requests";

const AuthContext = React.createContext({
  isLoggedIn: "",
  setIsLoggedIn: () => {},
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const isLoggedIn = () => {
    return Boolean(localStorage.getItem("refresh"));
  }
  // const isLoggedIn = (token) => {
  //   const data = verifyToken(token);
  //   alert(data)
  //   return !!Object.values(data);
  // };

  // const handleLoginState = () => {
  //   const setIsLoggedIn = Boolean(localStorage.getItem("refresh"));
  //   return setIsLoggedIn;
  // };

  const loginHandler = (username, password) => {
    loginUser(username, password)
      .then((res) => {
        if (!res.ok) {
          return 
        }
        localStorage.setItem("refresh", res.refresh);
        window.location.href = "/"
      })
      .catch((err) => console.log(err))
      // .finally(() => handleLoginState());
  };

  const logoutHandler = () => {
    localStorage.removeItem("refresh");
    // handleLoginState();
  };

  const contextValue = {
    isLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
