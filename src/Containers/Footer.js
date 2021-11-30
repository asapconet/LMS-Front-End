import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaGooglePlus,
  FaInstagram,
  FaGithub,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer h-20 w-full text-center text-sm absolute bg-black">
      <div className="flex py-4 justify-center">
        <FaFacebook className="mx-5 text-medium " />
        <FaTwitter />
        <FaYoutube className="mx-5 text-medium " />
        <FaInstagram />
        <FaGithub className="mx-5 text-medium " />
        <FaGooglePlus />
        <FaPinterest className="mx-5 text-medium " />
      </div>
      © {new Date().getFullYear} {""} Copyrights Dem boys
    </div>
  );
};

export default Footer;
