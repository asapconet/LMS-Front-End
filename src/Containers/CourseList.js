import React from "react";
import Button1 from "../Components/button";
import { FaHome } from "react-icons/fa";
import CourseComponent from "../Components/CoursesComponent";

const CourseList = () => {
  return (
    <div className="courses-container">
      <div className="available-courses">
        <div className="header-text flex justify-between">
          <h1 className="font-medium uppercase text-center">
            Choose your disired course below
          </h1>
          <a href="/">
            <FaHome />
          </a>
        </div>
        <div className="course-section">
          <div className="border-b px-3">
            <CourseComponent />
            <CourseComponent />
            <CourseComponent />
            <CourseComponent />
          </div>
          <a href="/courses/create" className="flex justify-end my-5 px-5">
            <Button1 className="hover:shadow-lg animate-pulse">
              Upload a course
            </Button1>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CourseList;
