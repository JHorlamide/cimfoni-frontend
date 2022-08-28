import React from "react";

const CustomTextarea = ({ id, boxClassName, boxProps }) => {
  return <textarea id={id} className={boxClassName} {...boxProps}></textarea>;
};

export default CustomTextarea;
