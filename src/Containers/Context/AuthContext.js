import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MeURL, VerifyLoginUrl } from "../../API/BaseURL";
import { client } from "../../API/requests";

const AuthContext = React.createContext({
  isLoggedIn: "",
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = React.useState(Boolean(localStorage.getItem("refresh")));
  const [user, setUser] = React.useState(localStorage.getItem("user"));


  const logoutHandler = () => {
    localStorage.removeItem("refresh");
    localStorage.removeItem("access");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  

  useEffect(() => {
    setIsLoggedIn(Boolean(localStorage.getItem("refresh")));
  }, [location]);

  useEffect(() => {
    if (isLoggedIn) {
      const tempClient = {...client};
      tempClient.defaults.headers.common["Authorization"] = `JWT ${localStorage.getItem("access")}`;
      tempClient.get(MeURL)
        .then((res) => {
          setUser(res.data)
          localStorage.setItem("user", JSON.stringify(res.data));
        })
        .catch((err) => {
          if (err.response.status === 401) {
            client.post(VerifyLoginUrl, {
              refresh: localStorage.getItem("refresh")
            })
              .then((res) => {
                localStorage.setItem("access", res.data.access);
                setIsLoggedIn(true);
              })
              .catch(() => {
                logoutHandler();
              });
          }
        })
    }
  }, [isLoggedIn]);

  const contextValue = {
    isLoggedIn,
    logout: logoutHandler,
    user,
  };



  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
