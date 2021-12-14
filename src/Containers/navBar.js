import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaInfinity, FaUserTie } from "react-icons/fa";
import "../App.css";
import AuthContext from "../Context/AuthContext";

export const NavBar = () => {
  const [isLogged, setIsLogged] = useState(false);
  const { isLoggedIn, logout } = useContext(AuthContext);

  if (!setIsLogged) {
    return true;
  }
  return (
    <nav>
      <div className="flex">
        <FaInfinity className="home-icon1" />
        <span className="mx-4 font-medium">
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          {!isLogged && <Link to="/posts">Blog</Link>}
        </span>
      </div>
      <FaInfinity className="home-icon2" />
      <div>
        <ul className="flex font-medium items-center">
          <li className="mx-4">
            <Link to="/user/student_register" onClick={logout}>
              {isLoggedIn() ? "Log out" : "Sign up"}
            </Link>
          </li>
          <li>
            <Link to="/user/login">
              {!isLoggedIn() ? "Login" : <FaUserTie />}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
