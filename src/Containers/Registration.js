import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import "../Styles/Pages/Registration.css";
import { about } from "../data";
import Button1, { Button2, Button3 } from "../Components/button";
import { RegistrationUrl } from "../API/BaseURL";
// import { data } from "autoprefixer";

// AUTH FETCH FUNC //
const registerUser = async ( username, email, password) => {
  const response = await fetch(RegistrationUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, email, password }),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.massage || "user not registered something went wrong");
  }
  return data;
};

// MAIN APP //
const Registration = (props) => {
  const [isLogged, setIsLogged] = useState(true);
  const enteredUsernameRef = useRef()
  const enteredEmailRef = useRef();
  const enteredPasswordRef = useRef();

  const switchModeHandler = () => {
    setIsLogged((oldState) => !oldState);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredUsername = enteredUsernameRef.current.value
    const enteredEmail = enteredEmailRef.current.value;
    const enteredPassword = enteredPasswordRef.current.value;

    if (isLogged) {
      console.log(props.registerUser.response);
    }
    try {
      const newUser = await registerUser( enteredUsername, enteredEmail, enteredPassword);
      console.log(newUser);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" text-white registration-container">
      <div className="learn-more">
        <div className="learn-more-heading">
          <h1>Sign up Right Now</h1>
        </div>
        <div className="learn-more-others">
          <p className="text">{about.slice(0, 256)}...</p>
          <Button1>
            <Link to="about"></Link>
            Learn More
          </Button1>
        </div>
      </div>
      <div className="signup-student-form">
        <div className="form-container">
          <div className=" flex justify-center p-2 form-header">
            <FaUser />
            <h2>Student Register </h2>
          </div>

          {/* PROFILE CREATION ENTRY FORM */}

          <form className="p-5" onSubmit={submitHandler}>
            <div className=" flex items-center form-control">
              <label htmlFor="username"></label>
              <FaUser />
              <input id='username' type="text" placeholder="Your Matric Number" ref={enteredUsernameRef} />
            </div>
            <div className=" flex items-center form-control">
              <label htmlFor="email"></label>
              <FaEnvelope />
              <input
                id="email"
                type="email"
                required
                placeholder="Your Email"
                ref={enteredEmailRef}
              />
            </div>
            <div className="flex items-center form-control">
              <label htmlFor="password"></label>
              <FaLock />
              <input
                id="password"
                type="password"
                required
                placeholder="Your Password"
                ref={enteredPasswordRef}
              />
            </div>
            <div className="flex items-center form-control">
              <label htmlFor="password"></label>
              <FaLock />
              <input type="password" placeholder="Confirm Password" />
            </div>

            <Button3
              className="my-4 text-center w-full"
              onClick={switchModeHandler}
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
              <Button2 className=" w-full">
                <Link to="/user/login">HAVE AN ACCOUNT? LOGIN</Link>
              </Button2>
            </div>
          </form>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default Registration;
