import React from "react";
import { Route, Routes } from "react-router-dom";

import { NavBar } from "./navBar";
import Home from "./Home";
import Registration from "./Registration";
import SignIn from "./SignIn";
import { ProtectedRoute } from "./Protected";

const Main = () => {

  return (
    <>
    <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/user/login" element={<SignIn />} />
        <Route path="/user/register" element={<Registration />} />
        <Route path="*" element={<ProtectedRoute />}/>
      </Routes>
    </>
  );
};

export default Main;
