import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaInfinity, FaUserTie } from "react-icons/fa";
import "../App.css";
import AuthContext from "../Context/AuthContext";

export const NavBar = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative">
      <div className="flex items-center">
        <Link to="/">
          <FaInfinity className="home-icon1" />
        </Link>
        <span className="mx-4 font-medium">
          {isLoggedIn && <Link to="/courses">Courses</Link>}
          <Link to="/about">About Us</Link>
        </span>
      </div>
      <FaInfinity className="home-icon2" />
      <ul className="flex gap-x-8 font-medium items-center">
        {isLoggedIn
          ? <>
            <li className="">
              <FaUserTie
                className="text-xl cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              />
              {isOpen && <ul className="bg-white px-2 py-4 absolute rounded shadow-lg flex flex-col gap-y-4">
                <li>
                  <Link to="/user/courses" className="py-2">
                    My Courses
                  </Link>
                </li>
                <li>
                  <Link to="/user/profile">My Profile</Link>
                </li>
              </ul>
              }
            </li>
            <li className="cursor-pointer" onClick={logout}>Log out</li>
          </>
          : <>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
          </>}
      </ul>
    </nav>
  );
};
