import React from "react";

const CustomBtn = ({
  className,
  isloading,
  iserror,
  leftIcon,
  rightIcon,
  children,
  ...rest
}) => {
  return (
    <button
      isloading={iserror ? false : isloading}
      className={className}
      {...rest}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export default CustomBtn;
