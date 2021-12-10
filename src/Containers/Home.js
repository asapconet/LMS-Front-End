import React, { useState } from "react";
// import {FaBook} from 'react-icons/fa'
import Button1 from "../Components/button";
import SignIn from "./SignIn";

const Home = ({signInhandler}) => {
  const [isRegistered, setIsRegistered] = useState();

  const startHandler = () => {
    if (!isRegistered) {
      console.log('somethhing')
      return <SignIn setIsRegistered={setIsRegistered}/>
    }
  };


  return (
    <div className=" home flex flex-col items-center bg-black text-center items-center">
      <h1>Computer Science Coureses</h1>
      <div className="border w-80 m-5 font-bold bg-white" />
      <p className="py-7">
        something something something about nothing and nothing became somthing
        we never knew <br />
        something something something about nothing and nothing became somthing
        we never knew something something something about nothing
      </p>
      <Button1 className="home-btn" onClick={startHandler}>START YOUR E-LEARNING </Button1>
    </div>
  );
};

export default Home;
