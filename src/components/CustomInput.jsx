import React from "react";

const CustomInput = ({
  type,
  name,
  placeholder,
  className,
  value,
  handleFormData,
}) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleFormData}
        className={`${className}`}
      />
    </div>
  );
};

export default CustomInput;
