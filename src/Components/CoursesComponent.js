import React, { useState, useEffect } from "react";
import { FaDownload } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { client } from "../API/requests";

const Courses = ({ posted_by, level, uuid, created, last_updated, cover, title, content, description, slug }) => {
  const navigate = useNavigate();
  console.log(uuid)
  const handleDelete = () => {
    console.log("delete");
    client.defaults.headers.common["Authorization"] = `JWT ${localStorage.getItem("access")}`;
    client.delete(`/resources/${uuid}/`, {
      uuid: uuid
    })
      .then((res) => {
        console.log(res);
        navigate("/user/courses");
      })
      .catch((err) => {
        console.log(err);
      })
  };
  return (
    <div className="course-item flex justify-between bg-black text-white rounded m-2">
      <div className="font-bold text-lg p-2 m-1 uppercase">
        <p>{title}</p>
      </div>
      <div className="">
        <Link to={``} className="course-button bg-gray-600 hover:bg-gray-700 text-white text-lg p-2 m-1 border rounded">
          View
        </Link>
      </div>
      <div>
        <button
          onClick={handleDelete}
          className="course-button bg-gray-600 hover:bg-red-gray text-white text-lg p-2 my-1 border rounded">
          Delete
        </button>
      </div>
      <div className="rounded-full p-1 h-9 text-sm m-1 font-bold bg-gray-600">
        <a href={content} download='picture' className="flex items-center">
            <FaDownload/>
        </a>
      </div>
    </div>
  );
};

export default Courses;
