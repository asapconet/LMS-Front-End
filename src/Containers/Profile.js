import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../Context/AuthContext";

export const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex items-center justify-center w-screen h-screen text-green-600">
      <div className="flex flex-col gap-y-8 border-b-2 bg-white shadow-lg px-4 py-8">
        <h1 className="text-center text-2xl font-bold border-b-2">
          {user.username}'s Profile
        </h1>
        <div className="flex flex-col gap-y-4">
          <div className="grid grid-cols-5 justify-start">
            <p className="col-span-2">Matric Number:</p>
            <p className="col-span-3">{user.username}</p>
          </div>
          <div className="grid grid-cols-5 justify-start">
            <p className="col-span-2">Email address:</p>
            <p className="col-span-3">{user.email}</p>
          </div>
          <div className="grid grid-cols-5 justify-start">
            <p className="col-span-2">Unique ID:</p>
            <p className="col-span-3">{user.uuid}</p>
          </div>
        </div>
        <Link className="bg-green-600 hover:bg-white hover:text-green-600 border-2 border-green-600 rounded-lg py-2 px-8 shadow text-white text-center" to="/user/courses">
          My Courses
        </Link>
      </div>
      
    </div>
  );
};
