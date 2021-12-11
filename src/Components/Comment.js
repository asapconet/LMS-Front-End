import React from "react";
// import axios from "axios";
import "../Styles/Pages/Comment.css";
import Button1 from "./button";
import Input from "../Components/input";

const Comment = () => {
  return (
    <div className="comment-section bg-white my-5 px-7 py-5">
      <div className="comment-header mb-2 ">
        <h2>Leave a Reply</h2>
      </div>
      <form>
        <div className="comment-form-control">
          <label htmlFor="comment">Your Comment</label>
          <textarea
            id="comment"
            rows="6"
            placeholder="Type Your Comment Here"
          ></textarea>
        </div>
        <div className="comment-form-control">
          <label htmlFor="comment-name">Your Comment:</label>
          <Input
            className="p-1"
            id="comment-name"
            type="text"
            placeholder="Type in your name here"
            required
          />
        </div>
        <div className="comment-form-control">
          <label htmlFor="comment-name">Your Email</label>
          <Input
            className="p-1"
            type="email"
            id="Type mail"
            placeholder="your email"
            required
          />
        </div>
        <div className="action-control">
          <Button1 className="bg-black">POST</Button1>
        </div>
      </form>
    </div>
  );
};

export default Comment;
