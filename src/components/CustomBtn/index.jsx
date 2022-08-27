import React from "react";

const CustomBtn = ({ className, leftIcon, rightIcon, children, ...rest }) => {
  return (
    <button className={className} {...rest}>
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export default CustomBtn;
