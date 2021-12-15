import React from "react";
import "../Styles/Components/PostCreate.css";
import { Button3 } from "../Components/button";

const PostCreate = () => {
  return (
    <section className="flex justify-center">
      <div className="post-container sm:w-full p-3">
        <div className="post-form ">
          <div className="post-header mb-3">
            <h2>Upload Materials For Your CourseBuddy</h2>
          </div>

          <div className="post-main-form p-2">
            <form>
              <div className="post-form-control">
                <label htmlFor="course-title">Course Title </label>
                <input id="course-title" type="text" />
              </div>
              <div className="post-form-control">
                <label>Upload Material</label>
                <input id="upload-mat" placeholder="Choose File" type="file" />
              </div>
              <div className="post-form-control">
                <label htmlFor="level">Choose Levels</label>
                <select className="bg-gray-200 m-2 p-1" id="tag" type="number">
                  <option value="600level">600level</option>
                  <option value="500level">500level</option>
                  <option value="400level">400level</option>
                  <option value="300level">300level</option>
                  <option value="200level">200level</option>
                  <option value="100level">100level</option>
                  <option value="Rems" selected>
                    Pre Degree
                  </option>
                </select>
              </div>
              <div className="post-form-control">
                <textarea
                  rows="10"
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
