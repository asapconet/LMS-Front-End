import React, { useState, useEffect, useCallback } from "react";
// import axios from "axios";
import Button1 from "../Components/button";
import { FaDownload } from "react-icons/fa";
import defaultPost from "../assets/postimg.JPG";
// import lebron from "../assets/lebron.JPG";
import post from "../data";
import AboutCard from "../Components/AboutCard";
import CommentCard from "../Components/CommentCard";
import Comment from "../Components/Comment";
// import { NavBar } from "./navBar";
import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";
// import { BaseURL } from "../API/BaseURL";
import { client } from "../API/requests";
import { ResourceURL } from "../API/BaseURL";

const SinglePost = () => {
  const { uuid } = useParams()
  const [data, setData] = useState({})
  const [otherArticles, setOtherArticles] = useState([])

  const getSinglePostData = useCallback(() => {
    client.get(`${ResourceURL}${uuid}`, {
      params: {
        uuid: uuid
      }
    })
      .then(res => {
        setData(res.data)
      })
      .catch()
  }, [uuid])

  const getFeaturedPost = useCallback(() => {
    client.get(`${ResourceURL}?level=${data.level}`, {
      params: {
        uuid: uuid
      }
    })
      .then(res => {
        setOtherArticles([
          ...res.data.results
        ])
      })
      .catch()
  }, [data])

  useEffect(() => {
    getSinglePostData()
  }, [getSinglePostData])

  useEffect(() => {
    data && getFeaturedPost()
  }, [data, getFeaturedPost])

  console.log(data)
  return (
    <>
      <section className=" post1 flex ">
        <div className=" text-center text-white ">
          <div>
            <div className=" mb-4 post-container flex justify-center flex-col">
              <div className="">
                <img src={data.cover && defaultPost} alt={"pic of course"} />
              </div>
              <div className="image-card bg-black flex shadow justify-center flex-col p-9 mt-4">
                <div>
                  <h1>{`${data.title} Material`}</h1>
                  <p>
                    {data.description}.
                  </p>
                  <Button1>
                    <a
                      href={data.content}
                      download={data.title}
                      className=" btn-d flex animate-pulse items-center"
                    >
                      DOWNLOAD MATERAILS FREE
                      <FaDownload className="ml-2" />
                    </a>
                  </Button1>
                </div>
              </div>
              {/* <AboutCard />
              <CommentCard />
              <Comment /> */}
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
            {otherArticles && otherArticles.map((course) => {
              return (
                <div key={course.uuid} className="flex gap-x-4">
                  <div className="flex flex-col justify-start">
                    <Link 
                      to={`/courses/${course.slug}/${course.uuid}/`}
                    >
                      {course.title}</Link>
                  </div>
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
