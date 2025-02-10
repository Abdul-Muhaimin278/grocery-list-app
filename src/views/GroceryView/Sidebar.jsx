import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Offcanvas, OffcanvasHeader, OffcanvasBody } from "reactstrap";
import {
  addCategory,
  fetchCategory,
  removeCategory,
  updateCategory,
} from "../../store/category/categoryThunk";
import { useNavigate, useParams } from "react-router-dom";
import CategoryContent from "../../components/CategoryContent";

const Sidebar = ({ isOpen, toggleSidebar, isMobile }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { categoryId } = useParams();

  const { categories, status } = useSelector((state) => state.category);
  const { uid } = useSelector((state) => state.auth);

  const [showForm, setShowForm] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [editingCategory, setEditingCategory] = useState(null);
  const [updatingCat, setUpdatingCat] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!categoryName.trim()) return;

    if (editingCategory) {
      dispatch(
        updateCategory({ categoryId: editingCategory, name: categoryName })
      )
        .unwrap()
        .finally(() => resetForm());
    } else {
      dispatch(addCategory({ categoryName, uid }))
        .unwrap()
        .finally(() => resetForm());
    }
  };

  const resetForm = () => {
    setShowForm(false);
    setEditingCategory(null);
    setCategoryName("");
    setUpdatingCat(false);
  };

  const handleEdit = (id, name) => {
    setUpdatingCat(true);
    setShowForm(true);
    setEditingCategory(id);
    setCategoryName(name);
  };

  const handleDelete = (id) => {
    dispatch(removeCategory(id));
  };

  useEffect(() => {
    dispatch(fetchCategory(uid));
  }, [dispatch, uid]);

  useEffect(() => {
    if (status === "success") {
      dispatch(fetchCategory(uid));
    }
  }, [status, dispatch, uid]);

  if (isMobile) {
    return (
      <Offcanvas
        isOpen={isOpen}
        toggle={toggleSidebar}
        style={{ width: "220px" }}
      >
        <OffcanvasHeader toggle={toggleSidebar}></OffcanvasHeader>
        <OffcanvasBody>
          <CategoryContent
            categories={categories}
            categoryId={categoryId}
            navigate={navigate}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            handleSubmit={handleSubmit}
            showForm={showForm}
            setShowForm={setShowForm}
            categoryName={categoryName}
            setCategoryName={setCategoryName}
            resetForm={resetForm}
            status={status}
            updatingCat={updatingCat}
          />
        </OffcanvasBody>
      </Offcanvas>
    );
  }

  return (
    <div className="border-end sidebar" style={{ width: "220px" }}>
      <CategoryContent
        categories={categories}
        categoryId={categoryId}
        navigate={navigate}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleSubmit={handleSubmit}
        showForm={showForm}
        setShowForm={setShowForm}
        categoryName={categoryName}
        setCategoryName={setCategoryName}
        resetForm={resetForm}
        status={status}
        updatingCat={updatingCat}
      />
    </div>
  );
};

export default Sidebar;
