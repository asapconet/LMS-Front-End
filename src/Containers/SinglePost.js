import React from "react";
import Button1 from "../Components/button";
import { FaDownload } from "react-icons/fa";
import lebron from "../assets/lebron.JPG";
import post from "../data";
import AboutCard from "../Components/AboutCard";
import CommentCard from "../Components/CommentCard";
import Comment from "../Components/Comment";
import { NavBar } from "./navBar";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const SinglePost = () => {
  return (
    <>
      <NavBar />
      <section className=" post1 flex ">
        <div className=" text-center text-white ">
          <div>
            <div className=" mb-4 post-container flex justify-center flex-col">
              <div className="">
                <img src={lebron} alt={"pic of course"} />
              </div>
              <div className="image-card bg-black flex shadow justify-center flex-col p-9 mt-4">
                <div>
                  <h1>Computer Courses</h1>
                  <p>
                    something about this life that you have zero idea about you
                    work so hard to know, thank you.
                  </p>
                  <Button1>
                    <a
                      href="download path"
                      download="CSC 400"
                      className=" btn-d flex animate-pulse items-center"
                    >
                      DOWNLOAD MATERAILS FREE
                      <FaDownload className="ml-2" />
                    </a>
                  </Button1>
                </div>
              </div>
              <AboutCard />
              <CommentCard />
              <Comment />
              <div></div>
            </div>
          </div>
        </div>
        <div className="side-sec text-center  text-white w-full capitalize">
          <div className="rounded bg-black ">
            <h1 className="font-bold text-3xl p-4">
              learn all your CSC cources with us
            </h1>
            <p>Free & Easy to Use</p>
            <p>
              the most comprehensive course materials are available in our
              database
            </p>
            <Link to="/levels">
              <Button1 className="my-4">SELECT LEVEL MATERIAL</Button1>
            </Link>
          </div>
          <div className="bg-white text-left rounded p-1 text-black my-4">
            <div className="border-b">
              <h3 className="font-medium py-1">Related Articles</h3>
            </div>
            {post.map((e) => {
              const { id, image, name, desc } = e;
              return (
                <div key={id} className="flex p-1 text-xs font-medium post-img">
                  <img src={image} alt={name} />
                  <span>
                    {desc}
                    <p className="text-right font-bold">by {name}</p>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SinglePost;
