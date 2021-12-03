import React from "react";
import Button1 from "../Components/button";
import Footer from "./Footer";
import { NavBar } from "./navBar";
import IMG from "../assets/IMG.PNG";

const BlogPagination = () => {
  const date = {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    day: new Date().getDay(),

    hour: new Date().getMinutes(),
    minute: new Date().getMinutes(),
  };
  return (
    <div>
      <NavBar />
      <div className="blog flex pl-44 pt-20">
        <figure className="mx-6 ">
          <img className="h-64 w-72" src={IMG} alt="the-upload" />
        </figure>
        <div>
          <h3 className="uppercase text-xl font-bold">Myn-course 101</h3>
          <h5 className="font-bold text-xs my-7">
            {date.year}/{date.month}/{date.day} {date.hour}:{date.minute}{" "}
            <span>by (Mykonos Japan)</span>
          </h5>
          <p className="text-gray-200 capitalize mb-10">
            ANOTHER TESTIS running
          </p>
          <div>
            <Button1 className="btn1 mt-9" children="">
              READ MORE
            </Button1>
          </div>
        </div>
      </div>
      <div className="pagination my-12 ">
        <ul className="flex flex-row justify-center">
          <li>1</li>
          <li>2</li>
          <li>...</li>
          <li>5</li>
        </ul>
      </div>
      <div className="footer-gen">
        <Footer />
      </div>
    </div>
  );
};

export default BlogPagination;
