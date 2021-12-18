import React, { useState, useContext, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { client } from "../API/requests";


import {
  FaUser
} from "react-icons/fa";
import "../Styles/Pages/Registration.css";
import AuthContext from "../Context/AuthContext";
import { LoginUrl } from "../API/BaseURL";
import { Loading } from "../Components/Loading";

const schema = Yup.object().shape({
  username: Yup.number().required("Matriculation number is required"),
  password: Yup.string()
});

export default function SignIn() {
  const [errors, setErrors] = useState({});
  const { isLoggedIn } = useContext(AuthContext);
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
          localStorage.setItem("access", res.data.access);
          navigate("/");
        })
        .catch((err) => {
          setErrors(err?.response?.data);

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


  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="flex flex-col gap-y-16 items-center shadow-lg">
        <div className=" flex justify-center gap-x-3 p-2 form-header text-green-600">
          <FaUser />
          <h2> Student Login </h2>
        </div>
        <form onSubmit={formik.handleSubmit} className="flex p-5 flex-col">
          {errors.detail && (
            <p className="text-red-500 text-center">{errors.detail}</p>
          )}
          <div className="flex flex-col gap-y-8">
            <div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 items-center">
              <label htmlFor="matricNumber">Matric Number</label>
                <input
                  placeholder="Matriculation Number"
                  className="border-2 border-green-600 rounded-lg py-2 px-4"
                  id="username"
                  {...formik.getFieldProps("username")}
                />
                {formik.touched.username && formik.errors.username ? (
                  <p className="text-red-500 col-start-2 text-center">
                    {formik.errors.username}
                  </p>
                ) : null}
                {errors.username && (
                  <p className="text-red-500 col-start-2 text-center">{errors.username}</p>
                )}
              </div>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-x-4 items-center">
              <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  className="border-2 border-green-600 rounded-lg py-2 px-4"
                  {...formik.getFieldProps("password")}
                />
              </div>
              {formik.touched.password && formik.errors.password ? (
                <p className="text-red-500 text-xs italic">
                  {formik.errors.password}
                </p>
              ) : null}
              {errors.password && (
                <p className="text-red-500 text-xs italic">{errors.password}</p>
              )}
            </div>
          </div>
          {formik.isSubmitting && <Loading />}
          <input
            type="submit"
            value="Login"
            className="border-0 bg-green-600 text-white rounded-lg w-full px-8 py-2 my-8"
          />

        </form>
      </div>
    </div>
  );
}
