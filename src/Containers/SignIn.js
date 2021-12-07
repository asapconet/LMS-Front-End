import React, { useState } from "react";
import "./Registration.css";
// import Footer from "./Footer";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { Button2, Button3 } from "../Components/button";
import { Link } from "react-router-dom";
// import { Input } from "postcss";

const SignIn = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [error, setError] = useState();

  const signinHandler = (event) => {
    event.preventDefault();
    if (enteredEmail.trim().length !== 0 && enteredPassword ) {
      return console.log('welcome to our portal, your details are',{
        username: enteredEmail,
        password: enteredPassword,
      })
    }
    setError({ name: "Invalid input", desc: "this thing I dont get" });
    return console.log(error);
  };

  const emailListener = (e) => {
    setEnteredEmail(e.target.value);
  };
  const passwordListener = (e) => {
    setEnteredPassword(e.target.event);
 };
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
              <label htmlFor="email"></label>
              <FaEnvelope />
              <input
                id="email"
                type="text"
                value={enteredEmail}
                onChange={emailListener}
                placeholder="Your Email"
              />
            </div>
            <div className="flex items-center form-control">
              <label htmlFor="password"></label>
              <FaLock />
              <input
                id="password"
                type="password"
                value={enteredPassword}
                onChange={passwordListener}
                placeholder="Your Password"
              />
            </div>

            <Button3 className="my-4 text-center w-full" type="submit">
              {" "}
              SUBMIT
            </Button3>
            <div className="text-center">
              <span className="flex justify-center py-8 border-t ">
                <FaInstagram className="mx-2" />
                <FaTwitter className="mx-2" />
                <FaFacebook className="mx-2" />
              </span>

              <Link to="user/student_register">
                <Button2 className=" w-full">NO ACCOUNT? SIGNUP</Button2>
              </Link>
            </div>
          </form>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default SignIn;
