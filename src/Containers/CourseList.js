import React, { useContext } from "react";
import Button1 from "../Components/button";
import CourseComponent from "../Components/CoursesComponent";
import { Link } from "react-router-dom";
import { useLoadItem } from "../utils/useLoadItem";
import { ResourceURL } from "../API/BaseURL";
import { Loading } from "../Components/Loading";
import AuthContext from "../Context/AuthContext";

const CourseList = () => {
  const { user } = useContext(AuthContext)
  const username = user.username
  const { loading, state, refetch } = useLoadItem(`${ResourceURL}?user=${username}`);
  return (
    <div className="courses-container">
      <div className="available-courses">
          <h1 className="px-4 font-medium uppercase text-center">
            below are courses uploaded by you
          </h1>
        <div className="course-section">
          <div className="border-b px-3">
            {state?.posts?.map((course) => (
              <CourseComponent key={course.uuid} {...course} />
            ))}
          </div>
          <Link to="/courses/create" className="flex justify-end my-5 px-5">
            <Button1 className="hover:shadow-lg animate-pulse">
              Upload a course
            </Button1>
          </Link>
          </div>
        {loading
          ? <Loading />
          : <>{state.next && <button
            onClick={refetch}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
          Load More
        </button>}</>}
      </div>
    </div>
  );
};

export default CourseList;
