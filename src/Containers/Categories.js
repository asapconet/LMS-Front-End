import React from 'react'
import '../Styles/Pages/CourseList.css'
import { NavBar } from './navBar';

export const Categories = () => {
    return (
      <div>
        <div className="font-bold pt-5 text-4xl text-center">
          Select Level to view cources on in the DB
        </div>
        <div className="levels grid grid-cols-2 p-9 border-b">
          <a
            href="/courses"
            className="flex justify-center items-center w-4/4 h-96 bg-white text-black rounded hover:shadow-xl m-4"
          >
            <div className="font-bold text-4xl items-center">!00Level</div>
          </a>

          <a
            href="/courses"
              className="flex justify-center items-center w-4/4 h-96 bg-white text-black rounded hover:shadow-xl m-4"
            >
            <div className="font-bold text-4xl items-center">!00Level</div>
          </a>

          <a
            href="/courses"
            className="flex justify-center items-center w-4/4 h-96 bg-white text-black rounded hover:shadow-xl m-4"
          >
            <div className="font-bold text-4xl items-center">!00Level</div>
          </a>

          <a
            href="/courses"
            className="flex justify-center items-center w-4/4 h-96 bg-white text-black rounded hover:shadow-xl m-4"
          >
            <div className="font-bold text-4xl items-center">!00Level</div>
          </a>
        </div>
      </div>
    );
}
