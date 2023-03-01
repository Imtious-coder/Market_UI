import React from "react";

const CustomInput = ({ type, name, placeholder, className }) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`form-control ${className}`}
      />
    </div>
  );
};

export default CustomInput;
