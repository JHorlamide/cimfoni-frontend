import React from "react";

const CustomInput = ({ id, inputClassName, inputProps }) => {
  return <input id={id} className={inputClassName} {...inputProps} />;
};

export default CustomInput;
