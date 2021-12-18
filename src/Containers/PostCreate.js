import React, { useContext, useState } from "react";
import * as Yup from "yup";
import "../Styles/Components/PostCreate.css";
import { ResourceURL } from "../API/BaseURL";
import { client } from "../API/requests";
import { useFormik } from "formik";
import AuthContext from "../Context/AuthContext";

const levels = [
  "100",
  "200",
  "300",
  "400",
  "500"
]
const schema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  content: Yup.mixed().required("Content is required"),
  level: Yup.mixed().oneOf(levels).required("Level is required"),
  posted_by: Yup.string().required("Resource should have an author"),
  cover: Yup.mixed(),
  description: Yup.string().required("Description is required"),
});
const PostCreate = () => {
  const [errors, setErrors] = useState({});
  const [file, setFile] = useState({
    cover: null,
    content: null
  })
  const [requestSuccess, setRequestSuccess] = useState(false);
  const { user } = useContext(AuthContext);
  
  const handleFileChange = (e, field) => {
    e.preventDefault()
    const uploadedFile = e.target.files[0];
    console.log(uploadedFile)
    setFile({
      ...file,
      [field]: uploadedFile
    })
    console.log(file)
    formik.setFieldValue(field, e.target.value);
  }

  const formik = useFormik({
    initialValues: {
      title: "",
      content: "",
      level: levels[0],
      posted_by: user.username,
      cover: "",
      description: ""
    },
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      setErrors({});
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("content", file.content);
      formData.append("level", values.level);
      formData.append("posted_by", values.posted_by);
      formData.append("cover", file.cover);
      formData.append("description", values.description);

      client.defaults.headers.common["Authorization"] = `JWT ${localStorage.getItem("access")}`;
      client.defaults.headers.common["Content-Type"] = "multipart/form-data";

      client
        .post(ResourceURL, formData)
        .then((res) => {
          setRequestSuccess(true);
          formik.resetForm();
        })
        .catch((err) => {
          console.log(err);
          setErrors(err.response.data);
        })
        .finally(() => {
          setSubmitting(false);
          setRequestSuccess(false);
        });
    },
    validationSchema: schema
  })


  return (
    <section className="flex justify-center">
      <div className="post-container sm:w-full p-3">
        <div className="post-form flex flex-col gap-y-8">
          <div className=" mb-3 text-4xl text-green-600">
            <h2>Upload Materials For Your CourseBuddy</h2>
            {requestSuccess && (
              <div className="text-green-600 text-center">
                Successful
              </div>
            )}
          </div>
          <div className="post-main-form p-2 shadow-lg border border-green-600 rounded-lg">
            <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
              <div className="post-form-control">
                <input
                  id="posted_by"
                  type="text"
                  hidden
                  className="border-2 border-green-600 rounded-lg py-2 px-4"
                  value={user.username}
                  {...formik.getFieldProps("posted_by")}
                />
                  {formik.touched.posted_by && formik.errors.posted_by
                    ? (<p className="text-red-500 text-xs italic">
                        {formik.errors.posted_by}
                      </p>)
                    : null
                  }
                  {errors.posted_by && (<p className="text-red-500 text-xs italic">{errors.posted_by}</p>)}
              </div>

              <div className="post-form-control">
                <label htmlFor="title">Course Title</label>
                <input
                  className="border-2 border-green-600 rounded-lg py-2 px-4"
                  id="title"
                  type="text"
                  {...formik.getFieldProps("title")}
                />
                {formik.touched.title && formik.errors.title
                  ? (<p className="text-red-500 text-xs italic">
                      {formik.errors.title}
                    </p>)
                  : null
                }
                {errors.title && (<p className="text-red-500 text-xs italic">{errors.title}</p>)}
              </div>
              <div className="post-form-control">
                <label htmlFor="cover">Cover Photo</label>
                <input
                  id="cover"
                  placeholder="Choose File"
                  type="file"
                  className="border-2 border-green-600 rounded-lg py-2 px-4"
                  accept="image/*"
                  {...formik.getFieldProps("cover")}
                  onChange={(e) => handleFileChange(e, "cover")}
                />
                {formik.touched.cover && formik.errors.cover
                  ? (<p className="text-red-500 text-xs italic">
                      {formik.errors.cover}
                    </p>)
                  : null
                }
                {errors.cover && (<p className="text-red-500 text-xs italic">{errors.cover}</p>)}
              </div>

              <div className="post-form-control">
                <label>Upload Material</label>
                <input
                  id="content"
                  placeholder="Choose File"
                  type="file"
                  className="appearance-none border-2 border-green-600 rounded-lg py-2 px-4"
                  {...formik.getFieldProps("content")}
                  onChange={(e) => handleFileChange(e, "content")}
                />
                {formik.touched.content && formik.errors.content
                  ? (<p className="text-red-500 text-xs italic">
                      {formik.errors.content}
                    </p>)
                  : null
                }
                {errors.content && (<p className="text-red-500 text-xs italic">{errors.content}</p>)}
              </div>

              <div className="post-form-control flex flex-col">
                <label htmlFor="level">Choose Levels</label>
                <select
                  className="appearance-none bg-white border-2 border-green-600 rounded-lg py-2 px-4"
                  id="level"
                  type="number"
                  {...formik.getFieldProps("level")}
                >
                  {levels.map((level) => (
                    <option
                      key={level}
                      value={level}
                    >
                      {level}
                    </option>
                  ))}
                </select>
                {formik.touched.level && formik.errors.level
                  ? (<p className="text-red-500 text-xs italic">
                      {formik.errors.level}
                    </p>)
                  : null
                }
                {errors.level && (<p className="text-red-500 text-xs italic">{errors.level}</p>)}
              </div>
              <div className="post-form-control">
                <textarea
                  rows="8"
                  cols="18"
                  placeholder="Description"
                  className="border-2 border-green-600 rounded-lg py-2 px-4"
                  id="description"
                  {...formik.getFieldProps("description")}
                ></textarea>
                {formik.touched.description && formik.errors.description
                  ? (<p className="text-red-500 text-xs italic">
                      {formik.errors.description}
                    </p>)
                  : null
                }
                {errors.description && (<p className="text-red-500 text-xs italic">{errors.description}</p>)}
              </div>

              <input className="w-full cursor-pointer bg-green-600 hover:bg-white hover:text-green-600 border-2 border-green-600 rounded-lg py-2 px-8 shadow text-white text-center" type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostCreate;
