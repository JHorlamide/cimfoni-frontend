import React from "react";

const CustomBtn = ({
  className,
  isLoading,
  isError,
  leftIcon,
  rightIcon,
  children,
  ...rest
}) => {
  return (
    <button
      isLoading={isError ? false : isLoading}
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
