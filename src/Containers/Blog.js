import React from "react";
import BlogPagination from "./BlogPagination";
import { FaAngleDoubleDown } from "react-icons/fa";
// import axios from "axios";
// import SinglePost from "./SinglePost";

const Blog = () => {
  return (
    <>
      <div className="flex flex-col h-screen bg-black justify-center items-center text-white text-center">
        <div>
          <h1 className="capitalize font-bold">
            learn all your computer science courses with courseLab
          </h1>
          <p className="py-7">
            something something something about nothing and nothing became
            somthing we never knew <br />
            something something something about nothing and nothing became
            somthing we never knew something something something about nothing
          </p>
        </div>
        <div className="arrow text-white font-bold text-4xl animate-bounce">
          <FaAngleDoubleDown />
        </div>
      </div>
      <div className=" singlepost px-40"></div>
      <BlogPagination />
    </>
  );
};

export default Blog;
