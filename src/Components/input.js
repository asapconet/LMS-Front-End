import React from "react";

const Input = ({
  title,
  label,
  placeholder,
  register,
  required,
  disabled = false,
  className,
  type,
}) => {
  return (
    <div className="mb-6">
      <label
        className=" mb-2 block text-gray-800 font-bold text-base"
        for={title}
      >
        {label}
      </label>
      <input
        className={`outline-none placeholder-gray-400 rounded-sm h-12 w-full px-5 focus:border-primary + ${className}`}
        id={title}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        // {...register(title, { required })}
      />
    </div>
  );
};

export default Input;
