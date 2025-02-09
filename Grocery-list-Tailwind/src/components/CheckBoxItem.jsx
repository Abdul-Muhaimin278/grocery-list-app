/* eslint-disable react/prop-types */
import { useState } from "react";
import { LuCircleCheckBig } from "react-icons/lu";
import { LuCircle } from "react-icons/lu";

export const CheckboxItem = ({ label, id }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={() => setChecked(!checked)}
        className="hidden"
      />
      <label htmlFor={id} className="flex items-center justify-center">
        {checked ? (
          <LuCircleCheckBig className="h-5 w-5 text-gray-300" />
        ) : (
          <LuCircle className="h-5 w-5 text-gray-300" />
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
