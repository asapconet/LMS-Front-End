import React, { useState, useRef, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import "../Styles/Pages/Registration.css";
import { Button2, Button3 } from "../Components/button";
import { LoginUrl } from "../API/BaseURL";
import AuthContext from "../Context/AuthContext";

export default function SignIn() {
  const enteredMatricNumberRef = useRef();
  const enteredPasswordRef = useRef();
  const { isLoggedIn, login } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    isLoggedIn() && navigate("/");
    // const token = localStorage.getItem("refresh");
    // console.log({ token, h: "hello" });
    // token && isLoggedIn(token) && navigate("/");
  }, [isLoggedIn, navigate]);

  // const switchModeHandler = () => {
  //   setIsLogged((prevState) => !prevState);
  // };

  const signinHandler = (event) => {
    event.preventDefault();

    const enteredMatricNumber = enteredMatricNumberRef.current.value;
    const enteredPassword = enteredPasswordRef.current.value;
    console.log(enteredMatricNumber)
    // return;

    try {
      login(enteredMatricNumber, enteredPassword);

      // alert(`user logged ${"your token is:" + loggedInUser.refresh}`);
    } catch (error) {
      console.log(error || "check credentials, you are not logged in");
    }
  };
  //   .then((data) => {
  // AuthCtx.loginHandler()
  //   })
  //   .catch

  return (
    <div className="signin-container">
      <div className="signup-student-form">
        <div className="form-container">
          <div className=" flex justify-center p-2 form-header">
            <FaUser />
            <h2> Student Login </h2>
          </div>

          {/* PROFILE CREATION ENTRY FORM */}

          <form className="p-5" onSubmit={signinHandler}>
            <div className=" flex items-center form-control">
              <label htmlFor="matricNumber"></label>
              <FaEnvelope />
              <input
                id="matricNumber"
                type="number"
                placeholder="Your Matric Number"
                ref={enteredMatricNumberRef}
              />
            </div>
            <div className="flex items-center form-control">
              <label htmlFor="password"></label>
              <FaLock />
              <input
                id="password"
                type="password"
                placeholder="Your Password"
                ref={enteredPasswordRef}
              />
            </div>

            <Button3
              className="my-4 text-center w-full"
              type="submit "
              // onClick={switchModeHandler}
            >
              {" "}
              SUBMIT
            </Button3>
            <div className="text-center">
              <span className="flex justify-center py-8 border-t ">
                <FaInstagram className="mx-2" />
                <FaTwitter className="mx-2" />
                <FaFacebook className="mx-2" />
              </span>

              <Link to="/user/student_register">
                <Button2 className=" w-full">NO ACCOUNT? SIGNUP</Button2>
              </Link>
            </div>
          </form>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
