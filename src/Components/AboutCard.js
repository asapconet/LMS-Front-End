import React, { useState } from "react";
import "../Styles/Components/AboutCard.css";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaUser,
} from "react-icons/fa";
import { about } from "../data";

const AboutCard = () => {
  const [knowMore, setKnowMore] = useState(false);
  return (
    <div className=" main bg-white mb-5 mt-4 items-center">
      <div>
        <div className="about-header p-4">
          <strong>About Author &nbsp; </strong>

          <FaFacebook className="mr-3" />
          <FaInstagram className="mr-3" />
          <FaTwitter className="mr-3" />
          <FaLinkedin className="mr-3" />
        </div>
      </div>

      <div className="about-body p-4">
        <div className="img-square-holder">
          <div className="round-img bg-black">
            <FaUser />
          </div>
        </div>

        <div className="about-text px-4">
          <h3>
            <strong>0Tuedon Tuedon</strong>
          </h3>
          <div>
            <p>{knowMore ? about : `${about.substring(0, 200)}...`}</p>
            <button
              className="text-gray-500 font-bold"
              onClick={() => setKnowMore(!knowMore)}
            >
              {knowMore ? "read less" : "read more"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
