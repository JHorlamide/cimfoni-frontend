import React from "react";
import Spinner from "../Spinner";

const CustomSelect = ({
  id,
  selectProps,
  selectPlaceholder,
  selectLoading,
  selectOptions,
  selectClassName,
}) => {
  return (
    <select className={selectClassName} id={id} {...selectProps}>
      {selectPlaceholder ? (
        <option value={""} disabled>
          {selectPlaceholder}
        </option>
      ) : null}

      {selectLoading ? (
        <option disabled>
          <Spinner />
        </option>
      ) : (
        selectOptions?.map((option) => (
          <option
            value={option.value || option.name}
            key={`${option.value || option.name}${Math.random()}`}
          >
            {option.label || option.name}
          </option>
        ))
      )}
    </select>
  );
};

export default CustomSelect;
