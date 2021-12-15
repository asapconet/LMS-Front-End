import React, { useEffect } from "react";
import "../Styles/Components/PostCreate.css";
import { Button3 } from "../Components/button";
import axios from "axios";
import { ResourceURL } from "../API/BaseURL";

const PostCreate = () => {
  const uploadCourse = (e) => {
    axios
      .post(ResourceURL, {
        posted_by: "",
        level: null,
        title: "",
        cover: null,
        content: null,
        description: "",
      })
      .then(
        (res) => {
          console.log(res.headers);
          if (res.ok) {
            console.log(res);
          }
          return res;
        },
        (error) => {
          console.log(error.response.data);
        }
      );
  };

  useEffect(() => {
    uploadCourse();
  }, []);

  return (
    <section className="flex justify-center">
      <div className="post-container sm:w-full p-3">
        <div className="post-form ">
          <div className="post-header mb-3">
            <h2>Upload Materials For Your CourseBuddy</h2>
          </div>
          <div className="post-main-form p-2">
            <form onSubmit={uploadCourse}>
              <div className="post-form-control">
                <label htmlFor="course-title">Name or Mat Number</label>
                <input id="posted_by" type="text" />
              </div>

              <div className="post-form-control">
                <label htmlFor="course-title">Course Title</label>
                <input id="title" type="text" />
              </div>
              <div className="post-form-control">
                <label>Set Cover Photo</label>
                <input id="cover" placeholder="Choose File" type="file" />
              </div>

              <div className="post-form-control">
                <label>Upload Material</label>
                <input id="content" placeholder="Choose File" type="file" />
              </div>

              <div className="post-form-control">
                <label htmlFor="level">Choose Levels</label>
                <select
                  className="bg-gray-200 m-2 p-1"
                  id="level"
                  type="number"
                >
                  <option value="400level">400level</option>
                  <option value="300level">300level</option>
                  <option value="200level">200level</option>
                  <option value="100level" selected>
                    100level
                  </option>
                </select>
              </div>
              <div className="post-form-control">
                <textarea
                  rows="8"
                  cols="18"
                  placeholder="Description"
                ></textarea>
              </div>

              <Button3 className="w-full">CREATE POST</Button3>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostCreate;
