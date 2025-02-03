import { useEffect, useState } from "react";
import { LuPlus, LuX } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input, Spinner } from "reactstrap";
import {
  addCategory,
  fetchCategory,
  removeCategory,
} from "../../store/category/categoryThunk";
import { useNavigate, useParams } from "react-router-dom";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { categoryId } = useParams();

  const { categories, status } = useSelector((state) => state.category);

  const [showForm, setShowForm] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [categoryDel, setCategoryDel] = useState(null);

  const handleAddCategory = (e) => {
    e.preventDefault();
    if (categoryName) {
      dispatch(addCategory(categoryName)).finally(() => {
        setCategoryName("");
        setShowForm(false);
      });
    }
  };

  const handleRemoveCategory = (id) => {
    setCategoryDel(id);
    dispatch(removeCategory(id)).finally(() => setCategoryDel(null));
  };

  const handleGetLists = (id) => {
    navigate(`/groceries-list/${id}`);
  };

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  return (
    <div className="border-end sidebar" style={{ width: "220px" }}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="m-0">Categories</h5>
        <Button
          color="link"
          className="btn text-success fs-5 p-0"
          onClick={() => setShowForm(true)}
        >
          <LuPlus />
        </Button>
      </div>

      {showForm && (
        <div className="category-form p-3 mb-3">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <small className="fw-medium m-0">New Category</small>
            <Button
              color="link"
              className="text-muted p-0"
              onClick={() => setShowForm(false)}
            >
              <LuX color="#9CA3AF" />
            </Button>
          </div>
          <form onSubmit={handleAddCategory}>
            <Input
              type="text"
              placeholder="Category name"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            />
            <Button
              color="success"
              className="btn w-100 mt-3 text-white add-category-btn"
              onClick={handleAddCategory}
              type="submit"
              disabled={status === "adding" || categoryName === ""}
            >
              {status === "adding" ? (
                <Spinner size="sm" color="light" />
              ) : (
                "Add Category"
              )}
            </Button>
          </form>
        </div>
      )}

      {status === "fetching categories" ? (
        <div className="h-25 d-flex justify-content-center align-items-center">
          <Spinner color="success" />
        </div>
      ) : (
        <div className="category-list">
          {categories?.map(({ categoryId: catID, name }) => (
            <div
              className={`row justify-content-between align-items-center category-item ps-3 pb-1 ${
                categoryId === catID && "active-category"
              }`}
              key={catID}
              style={{ cursor: "pointer" }}
              onClick={() => handleGetLists(catID)}
            >
              <p className="col rounded-3 py-2 fw-medium m-0">{name}</p>
              <Button
                color="link"
                className="col-2 p-0"
                onClick={() => handleRemoveCategory(catID)}
              >
                {status === "removing" && categoryDel === catID ? (
                  <Spinner color="secondary" size="sm" />
                ) : (
                  <LuX color="#9CA3AF" />
                )}
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
