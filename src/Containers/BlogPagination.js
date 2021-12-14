import React from "react";
import { Link } from "react-router-dom";
import Button1 from "../Components/button";
import Footer from "./Footer";
import post from "../data";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const BlogPagination = () => {
  const date = {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    day: new Date().getDay(),

    hour: new Date().getMinutes(),
    minute: new Date().getMinutes(),
  };
  return (
    <div>
      {/* <NavBar /> */}
      <div className="blog grid grid-cols-2 pl-20 pt-20">
        {post.map((content) => {
          const { title, name, id, image, type } = content;
          return (
            <section className=" flex items-center">
              <figure key={id} className="mx-6 my-6 ">
                <img className="h-64 w-72" src={image} alt="the-upload" />
              </figure>
              <div className="">
                <h3 className="uppercase text-xl font-bold">{title}</h3>
                <h5 className="font-bold text-xs my-7">
                  {date.year}/{date.month}/{date.day} {date.hour}:{date.minute}{" "}
                  <span>by ({name})</span>
                </h5>
                <p className="text-gray-200 capitalize mb-10">
                  a {type} level course
                </p>
                <div>
                  <Link to="/posts/singlepost">
                    <Button1 className="btn1 mt-9" children="">
                      READ MORE
                    </Button1>
                  </Link>
                </div>
              </div>
            </section>
          );
        })}
      </div>
      <div className="pagination my-12 ">
        <ul className="flex flex-row justify-center">
          <li><FaArrowLeft/></li>
          
          <li><FaArrowRight/></li>
        </ul>
      </div>
      <div className="footer-gen"><Footer /></div>
    </div>
  );
};

export default BlogPagination;
