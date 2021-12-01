import React from 'react'
import './Registration.css'
import Footer from './Footer';
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { Button2, Button3 } from "../Components/button";




const SignIn = () => {
  const submitHandler = () => {
    return null;
  };
    return (
      <div className='signin-container'>
        <div className="signup-student-form">
        <div className="form-container">
          <div className=" flex justify-center p-2 form-header">
            <FaUser />
            <h2> Student Login </h2>
          </div>

          {/* PROFILE CREATION ENTRY FORM */}

          <form className="p-5" onSubmit={submitHandler}>
            <div className=" flex items-center form-control">
              <label htmlFor=""></label>
              <FaEnvelope />
              <input type="flex items-center" placeholder="Your Email" />
            </div>
            <div className="flex items-center form-control">
              <label htmlFor=""></label>
              <FaLock />
              <input type="text" placeholder="Your Password" />
            </div>

            <Button3 className="my-4 text-center w-full"> SUBMIT</Button3>
            <div className="text-center">
              <span className="flex justify-center py-8 border-t ">
                <FaInstagram className="mx-2" />
                <FaTwitter className="mx-2" />
                <FaFacebook className="mx-2" />
              </span>
              <Button2 className=" w-full">NO ACCOUNT? SIGNUP</Button2>
            </div>
          </form>
        </div>
      </div>
        <Footer />
      </div>
    );
}

export default SignIn;
