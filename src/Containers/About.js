import React from "react";
import { about } from "../data";
import { NavBar } from "./navBar";

export const About = () => {
  return (
    <div>
      <article className="px-72 ">
        <h1 className="font-bold text-3xl text-center my-9">
          This site was created for student use with love from...
        </h1>
        <img className='float-left m-2 w-20 h-20' src="#" alt="her hot shot" />
        <p>{about}</p>
      </article>
    </div>
  );
};
