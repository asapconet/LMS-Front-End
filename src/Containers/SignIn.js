import React, { useState, useRef, useContext, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { client, headers } from "../API/requests";
import PropTypes from "prop-types";

import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import "../Styles/Pages/Registration.css";
import { Button2} from "../Components/button";
// import { LoginUrl } from "../API/BaseURL";
import AuthContext from "../Context/AuthContext";
import { LoginUrl } from "../API/BaseURL";

const schema = Yup.object().shape({
  username: Yup.number().required("Matriculation number is required"),
  password: Yup.string()
});

export default function SignIn() {
  const [errors, setErrors] = useState({});
  const enteredMatricNumberRef = useRef();
  const enteredPasswordRef = useRef();
  const { isLoggedIn, login } = useContext(AuthContext);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      setErrors({});
      client.post(LoginUrl, values)
        .then((res) => {
          localStorage.setItem("refresh", res.data.refresh);
          navigate("/");
        })
        .catch((err) => {
          setErrors(err.response.data);
          
        })
        .finally(() => {
          setSubmitting(false);
        });


    },
    validationSchema: schema,
  })

  useEffect(() => {
    isLoggedIn && navigate("/");
  }, [isLoggedIn, navigate]);


  const signinHandler = (event) => {
    event.preventDefault();

    const enteredMatricNumber = enteredMatricNumberRef.current.value;
    const enteredPassword = enteredPasswordRef.current.value;
    console.log(enteredMatricNumber)
    // return;

    try {
      login(enteredMatricNumber, enteredPassword);

      // alert(`user logged ${"your token is:" + loggedInUser.refresh}`);
    } catch (error) {
      console.log(error || "check credentials, you are not logged in");
    }
  };
  //   .then((data) => {
  // AuthCtx.loginHandler()
  //   })
  //   .catch

  return (
    <div className="signin-container">
      <div className="signup-student-form">
        <div className="form-container">
          <div className=" flex justify-center p-2 form-header">
            <FaUser />
            <h2> Student Login </h2>
          </div>

          {/* PROFILE CREATION ENTRY FORM */}

          <form className="p-5" onSubmit={formik.handleSubmit} className="flex flex-col">
            {errors.detail && (<p className="text-red-500 text-center">{errors.detail}</p>)}
            <div>
              <div className=" flex items-center form-control">
                <label htmlFor="matricNumber"></label>
                <FaEnvelope />
                <input
                  id="username"
                  {...formik.getFieldProps("username")}
                  />
              </div>
              {formik.touched.username && formik.errors.username ? (<p className="text-red-500 text-xs italic">{formik.errors.username}</p>) : null}
              {errors.username && (<p className="text-red-500 text-xs italic">{errors.username}</p>)}
            </div>
            <div>
              <div className="flex items-center form-control">
                <label htmlFor="password"></label>
                <FaLock />
                <input
                  id="password"
                  type="password"
                  {...formik.getFieldProps("password")}
                />
              </div>
              {formik.touched.password && formik.errors.password ? (<p className="text-red-500 text-xs italic">{formik.errors.password}</p>) : null}
              {errors.password && (<p className="text-red-500 text-xs italic">{errors.password}</p>)}
            </div>
            {formik.isSubmitting && <p>Logging in user...</p>}
            <input type="submit" value="Login" className="border-0 bg-black rounded-lg w-full px-8 py-2 my-8" />
            
          </form>
          <div className="text-center">
              <span className="flex justify-center py-8 border-t ">
                <FaInstagram className="mx-2" />
                <FaTwitter className="mx-2" />
                <FaFacebook className="mx-2" />
              </span>

              <Link to="/user/register">
                <Button2 className=" w-full">NO ACCOUNT? SIGNUP</Button2>
              </Link>
            </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
