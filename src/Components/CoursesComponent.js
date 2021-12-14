import React from "react";
import { FaDownload } from "react-icons/fa";

const Courses = () => {
  return (
    <div className="course-item flex justify-between bg-black text-white rounded m-2">
      <div className="font-bold text-lg p-2 m-1 uppercase">
        <p>Csc 102</p>
      </div>
      <div className="">
        <button className="course-button bg-gray-600 hover:bg-gray-700 text-white text-lg p-2 m-1 border rounded">
          Edit
        </button>
      </div>
      <div>
        <button className="course-button bg-gray-600 hover:bg-red-gray text-white text-lg p-2 my-1 border rounded">
          <p>Delete</p>
        </button>
      </div>
      <div className="rounded-full p-1 h-9 text-sm m-1 font-bold bg-gray-600">
        <a href="../assests/IMG.PNG" download='picture' className="flex items-center">
            <FaDownload/>
        </a>
      </div>
    </div>
  );
};

export default Courses;
