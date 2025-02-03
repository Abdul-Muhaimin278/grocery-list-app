/* eslint-disable react/prop-types */
import { useState } from "react";
import { LuCircleCheckBig } from "react-icons/lu";
import { LuCircle } from "react-icons/lu";

export const CheckboxItem = ({ label }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        id={label}
        checked={checked}
        onChange={() => setChecked(!checked)}
        className="d-none"
      />
      <label
        htmlFor={label}
        className="d-flex align-items-center justify-content-start"
      >
        {checked ? (
          <LuCircleCheckBig color="#10B981" size="20px" />
        ) : (
          <LuCircle color="#ccc" size="20px" className="" />
        )}
        <p
          className={`ms-2 mb-0 ${
            checked && "text-decoration-line-through text-secondary"
          }`}
        >
          {label}
        </p>
      </label>
    </div>
  );
};
