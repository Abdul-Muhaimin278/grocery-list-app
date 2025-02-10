import { LuCircleCheckBig, LuCircle } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { updateCheckedValue } from "../store/category/categoryThunk";

export const CheckboxItem = ({ name, id, checked, categoryId, listId }) => {
  const dispatch = useDispatch();

  const handleToggleChecked = () => {
    dispatch(
      updateCheckedValue({
        categoryId,
        listId,
        name,
        checked: !checked,
      })
    );
  };

  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={handleToggleChecked}
        className="d-none"
      />
      <label
        htmlFor={id}
        className="d-flex align-items-center justify-content-start"
      >
        {checked ? (
          <LuCircleCheckBig color="#10B981" size="20px" />
        ) : (
          <LuCircle color="#ccc" size="20px" />
        )}
        <p
          className={`ms-2 mb-0 ${
            checked && "text-decoration-line-through text-secondary"
          }`}
        >
          {name}
        </p>
      </label>
    </div>
  );
};
