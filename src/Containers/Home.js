import React, { useState } from "react";
import { Link } from "react-router-dom";
// import {FaBook} from 'react-icons/fa'
import Button1 from "../Components/button";
import SignIn from "./SignIn";

const Home = ({ signInhandler }) => {
  const [isRegistered, setIsRegistered] = useState();

  const startHandler = () => {
    if (!isRegistered) {
      console.log("somethhing");
      return <SignIn setIsRegistered={setIsRegistered} />;
    }
  };

  return (
    <div className="flex h-screen justify-center items-center bg-black text-white text-center">
      <div className="bg-">
        <h1 className="font-medium text-4xl">My University Study Buddy</h1>
        <div className="border m-5 font-bold bg-white" />
        <p className="py-7">
          something something something about nothing and nothing became somthing
          we never knew <br />
          something something something about nothing and nothing became somthing
          we never knew something something something about nothing
        </p>
        <Button1 className="home-btn animate-pulse " onClick={startHandler}>
          <Link to="/courses">START YOUR E-LEARNING </Link>
        </Button1>
      </div>
    </div>
  );
};

export default Home;
