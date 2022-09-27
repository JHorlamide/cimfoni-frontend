import React from "react";
import CustomSelect from "./CustomSelect";
import CustomTextarea from "./CustomTextarea";
import CustomInput from "./CustomInput";


const CustomizedInput = ({
  id,
  label,
  labelClassName,

  select,
  selectProps,
  selectOptions,
  selectClassName,
  selectLoading,
  selectPlaceholder,

  box,
  boxProps,
  boxClassName,

  inputProps,
  inputClassName,
  errorText,
  ...rest
}) => {
  return (
    <div {...rest}>
      {!!label && (
        <label className={labelClassName} htmlFor={id}>
          {label}
        </label>
      )}
      
      {select ? (
        <CustomSelect
          id={id}
          selectProps={selectProps}
          selectOptions={selectOptions}
          selectLoading={selectLoading}
          selectPlaceholder={selectPlaceholder}
          selectClassName={selectClassName}
        />
      ) : box ? (
        <CustomTextarea
          id={id}
          boxClassName={boxClassName}
          boxProps={boxProps}
        />
      ) : (
        <CustomInput
          id={id}
          inputClassName={inputClassName}
          inputProps={inputProps}
        />
      )}
      
      {errorText ? <p className='text-sm text-red-400'>{errorText}</p> : null}
    </div>
  );
};

export default CustomizedInput;
