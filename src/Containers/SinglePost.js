import React, { useState, useEffect, useCallback } from "react";
import Button1 from "../Components/button";
import { FaDownload } from "react-icons/fa";
import defaultPost from "../assets/postimg.JPG";
import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";
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
  }, [data, uuid])

  useEffect(() => {
    getSinglePostData()
  }, [getSinglePostData])

  useEffect(() => {
    data && getFeaturedPost()
  }, [data, getFeaturedPost])

  console.log(data)
  return (
    <>
      <section className="px-32 grid grid-cols-6 gap-x-8">
        <div className="col-span-4 mb-4 flex flex-col">
          <img src={data.cover || defaultPost} alt={"pic of course"} />
          <div className="bg-black text-white flex shadow gap-y-8 flex-col p-9 mt-4">
              <h1 className="text-center">{`${data.title} Material`}</h1>
              <p className="leading-loose">{data.description}</p>
              <a
                href={data.content}
                download={data.title}
                className="flex gap-x-2 justify-center items-center border text-center border-white animate-pulse"
              >
                <span>Download Course Content</span>
                <FaDownload />
              </a>

          </div>
          <div></div>
        </div>
        <div className="col-span-2 side-sec text-center  text-white w-full capitalize">
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
          <div className="bg-white text-left rounded px-4 text-black my-4 shadow-lg">
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
