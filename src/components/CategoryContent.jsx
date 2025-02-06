import { LuArrowUp, LuPlus, LuX } from "react-icons/lu";
import { Button, Input, Spinner } from "reactstrap";

const CategoryContent = ({
  categories,
  categoryId,
  navigate,
  handleEdit,
  handleDelete,
  handleSubmit,
  showForm,
  setShowForm,
  categoryName,
  setCategoryName,
  resetForm,
  status,
  updatingCat,
}) => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="m-0">Categories</h5>
        <Button
          color="link"
          className="text-success fs-5 p-0"
          onClick={() => setShowForm(true)}
        >
          <LuPlus />
        </Button>
      </div>

      {showForm && (
        <div className="category-form p-3 mb-3">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <small className="fw-medium m-0">
              {updatingCat ? "Update Category" : "New Category"}
            </small>
            <Button color="link" className="text-muted p-0" onClick={resetForm}>
              <LuX color="#9CA3AF" />
            </Button>
          </div>
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="Category name"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            />
            <Button
              color="success"
              className="btn w-100 mt-3 text-white add-category-btn"
              type="submit"
              disabled={
                status === "adding" ||
                status === "updating" ||
                categoryName.trim() === ""
              }
            >
              {status === "adding" || status === "updating" ? (
                <Spinner size="sm" color="light" />
              ) : updatingCat ? (
                "Update Category"
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
                categoryId === catID ? "active-category" : ""
              }`}
              key={catID}
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`/groceries-list/${catID}`)}
            >
              <p className="col rounded-3 py-2 fw-medium m-0">{name}</p>
              <Button
                color="link"
                className="col-2 p-0"
                onClick={() => handleEdit(catID, name)}
              >
                <LuArrowUp color="#9CA3AF" />
              </Button>
              <Button
                color="link"
                className="col-2 p-0"
                onClick={() => handleDelete(catID)}
              >
                <LuX color="#9CA3AF" />
              </Button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default CategoryContent;
