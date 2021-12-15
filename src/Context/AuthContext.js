import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AuthContext = React.createContext({
  isLoggedIn: "",
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = React.useState(Boolean(localStorage.getItem("refresh")));

  const logoutHandler = () => {
    localStorage.removeItem("refresh");
    window.location.href = "/login";
  };

  const contextValue = {
    isLoggedIn,
    logout: logoutHandler,
  };

  useEffect(() => {
    setIsLoggedIn(Boolean(localStorage.getItem("refresh")));
  }, [location]);

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
