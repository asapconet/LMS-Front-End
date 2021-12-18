import React from "react";
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
    <div className="w-full course-item grid grid-cols-4 justify-between bg-green-600 text-white rounded m-2">
      <div className="font-bold text-lg p-2 m-1 uppercase">
        <p>{title}</p>
      </div>
      <div className="">
        <Link to={`/courses/${slug}/${uuid}`} className="course-button bg-white hover:bg-green-700 text-green-600 hover:text-white text-lg p-2 m-1 border rounded">
          View
        </Link>
      </div>
      <div>
        <button
          onClick={handleDelete}
          className="bg-white hover:bg-green-700 text-green-600 hover:text-white text-lg p-2 m-1">
          Delete
        </button>
      </div>
        <a href={content} download='picture' className="flex items-center">
            <FaDownload/>
        </a>
    </div>
  );
};

export default Courses;
