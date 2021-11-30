import React from "react";
import Button1 from "../Components/button";
import { NavBar } from "./navBar";

const Blog = () => {
  return (
      <>
      <NavBar/>
    <div className="flex h-screen justify-center items-center text-white text-center">
      <div>
          <p className='hidden'> Welcome You're Now logged in</p>
        <h1 className="capitalize font-bold">
          learn all your computer science courses with courseLab
        </h1>
        <p className="py-7">
          something something something about nothing and nothing became
          somthing we never knew <br />
          something something something about nothing and nothing became
          somthing we never knew something something something about nothing
        </p>
        <Button1 className=" hover">Start Your Courses</Button1>
      </div>
    </div>
    </>
  );
};

export default Blog;
