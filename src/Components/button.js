import React from "react";

const Button1 = ({ children, onClick, className }) => {
  return (
    <button
      className={` border border-white h-10 px-10 text-white text-sm font-bold ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button1;

export const Button2 = ({ children, onClick }) => {
  return (
    <button className="bg-white w-80 h-10 rounded-3xl text-black text-sm font-bold" onClick={onClick}>
      {children}
    </button>
  );
};
