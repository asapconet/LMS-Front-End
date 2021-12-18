import React, { useContext } from "react";
import CourseComponent from "../Components/CoursesComponent";
import { Link } from "react-router-dom";
import { useLoadItem } from "../utils/useLoadItem";
import { ResourceURL } from "../API/BaseURL";
import { Loading } from "../Components/Loading";
import AuthContext from "../Context/AuthContext";

const CourseList = () => {
  const { user } = useContext(AuthContext)
  const username = user.username
  const { loading, state, refetch } = useLoadItem(`${ResourceURL}?username=${username}`);
  return (
    <div className="px-4 md:px-8 lg:px-16 flex flex-col gap-y-4">
        <h1 className="px-4 font-medium uppercase text-center text-green-600">
          below are courses uploaded by you
        </h1>
        <div className="flex w-full flex-col items-center">
          {state?.posts?.map((course) => (
            <CourseComponent key={course.uuid} {...course} />
          ))}
        </div>
      {loading
        ? <Loading />
        : <>{state.next && <button
          onClick={refetch}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
        Load More
      </button>}</>}
      <Link to="/courses/create" className="text-green-600 border border-green-600 hover:text-white hover:bg-green-600 text-center w-full mx-auto">
        Upload a course
      </Link>
    </div>
  );
};

export default CourseList;
