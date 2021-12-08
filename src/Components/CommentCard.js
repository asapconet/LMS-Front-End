import React from "react";
import { FaReply, FaUser } from "react-icons/fa";
import "../Styles/Components/AboutCard.css";
import "../Styles/Components/CommentCard.css";
const CommentCard = () => {
  return (
    <div className="bg-white">
      <div className="p-3">
        <div className="comment-number p-2">
          <strong>1 Comment</strong>
        </div>
        <div className="comment-body py-3">
          <div className="tiny-square-holder">
            <div className="round-img-comment bg-black">
              <FaUser className="center" />
            </div>
          </div>
          <div className="comment-text text-left  px-5">
            <h3>
              <span>
                <strong>
                  Tuoyo Tuedon
                  <span>
                    <FaReply className="comment-icon" />
                  </span>
                </strong>
              </span>
            </h3>
            <div>
              <p>Lorem Ipsum Baby</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
