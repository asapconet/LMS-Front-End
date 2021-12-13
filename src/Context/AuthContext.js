import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: "",
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const isLoggedIn = () => {
    return Boolean(localStorage.getItem("refresh"));
  }

  const logoutHandler = () => {
    localStorage.removeItem("refresh");
  };

  const contextValue = {
    isLoggedIn,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
