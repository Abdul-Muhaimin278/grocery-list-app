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
  const { uid } = useSelector((state) => state.auth);

  const [showForm, setShowForm] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [categoryDel, setCategoryDel] = useState(null);

  const handleAddCategory = (e) => {
    e.preventDefault();
    if (categoryName) {
      dispatch(addCategory({ categoryName, uid })).finally(() => {
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
    dispatch(fetchCategory(uid));
  }, [dispatch, uid]);

  return (
    <>
      <div className="h-screen sticky top-0 z-60 w-50 bg-white border-r-gray-600 shadow-sm">
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Categories</h2>
            <button
              className="p-1 hover:bg-emerald-50 rounded-full text-emerald-600"
              title="Add Category"
            >
              <LuPlus className="h-5 w-5" />
            </button>
          </div>
          {showForm && (
            <div className="mb-4 bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-sm font-medium text-gray-700">
                  New Category
                </h3>
                <button className="text-gray-400 hover:text-gray-600">
                  <LuX className="w-4 h-4" />
                </button>
              </div>
              <form onSubmit={handleAddCategory}>
                <input
                  type="text"
                  placeholder="Category name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md mb-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  onChange={(e) => categoryName(e.target.event)}
                />
                <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                >
                  Add Category
                </button>
              </form>
            </div>
          )}
          <div className="space-y-1">
            {categories?.map(({ categoryId: catID, name }) => (
              <div className="flex justify-between items-center" key={catID}>
                <div
                  className="w-full max-w-40 flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900 cursor-pointer"
                  onClick={() => handleGetLists(catID)}
                >
                  <p>{name}</p>
                </div>
                <button
                  className=""
                  onClick={() => handleRemoveCategory(catID)}
                >
                  {status === "removing" && categoryDel === catID ? (
                    <Spinner color="secondary" size="sm" />
                  ) : (
                    <LuX color="#9CA3AF" />
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
