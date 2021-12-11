import React, { useState } from "react";
import { Route, Routes } from "react-router";

import { NavBar } from "./navBar";
import Home from "./Home";
import Registration from "./Registration";
import SignIn from "./SignIn";
import Blog from "./Blog";
import BlogPagination from "./BlogPagination";
import PostCreate from "./PostCreate";
import CourseList from "./CourseList";
import SinglePost from './SinglePost'
import { About } from "./About";

const Main = () => {
  const [token, setToken] = useState( true);

  if (!token) {
    return <SignIn setToken={setToken} />;
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Home />
          </>
        }
      />
      <Route path="/user/login" element={<SignIn />}></Route>
      <Route path="/user/student_register" element={<Registration />} />
      <Route path="/posts/" element={<Blog />} />
      <Route path='/posts/singlepost' element={<SinglePost/>}/>
      <Route path="/free" element={<BlogPagination />} />
      <Route path="/posts/create" element={<PostCreate />} />
      <Route path='/about' element={<About/>} />
      <Route path="/courses/" element={<CourseList />} />
    </Routes>
  );
};

export default Main;
