import React from "react";
import { Route, Routes } from "react-router-dom";

import { NavBar } from "./navBar";
import Home from "./Home";
import SignIn from "./SignIn";
import { ProtectedRoute } from "./Protected";
import { About } from "./About";

const Main = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<ProtectedRoute />} />
      </Routes>
    </>
  );
};

export default Main;
