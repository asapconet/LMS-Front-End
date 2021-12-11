import React from "react";
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

const Registration = () => {
  const submitHandler = () => {
    return null;
  };
  return (
    <div className=" text-white registration-container">
      <div className="learn-more">
        <div className="learn-more-heading">
          <h1>Sign up Right Now</h1>
        </div>
        <div className="learn-more-others">
          <p className="text">
            {about.slice(0, 256)}...
            </p>
          <Button1>
            <Link to='about'>

            </Link>
            Learn More</Button1>
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
              <label htmlFor=""></label>
              <FaUser />
              <input type="text" placeholder="Your Matric Number" />
            </div>
            <div className=" flex items-center form-control">
              <label htmlFor="email"></label>
              <FaEnvelope />
              <input type="email" placeholder="Your Email" />
            </div>
            <div className="flex items-center form-control">
              <label htmlFor="pswd"></label>
              <FaLock />
              <input type="password" placeholder="Your Password" />
            </div>
            <div className="flex items-center form-control">
              <label htmlFor="pswd"></label>
              <FaLock />
              <input type="password" placeholder="Confirm Password" />
            </div>

            <Button3 className="my-4 text-center w-full"> SUBMIT</Button3>
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
