import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../views/GroceryView/Sidebar";
import { useSelector } from "react-redux";

const GroceryLayout = () => {
  const { uid } = useSelector((state) => state.auth);

  if (!uid) {
    return <Navigate to="/auth/login" replace />;
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-auto">
        <Header layout="GroceryLayout" />
        <Outlet />
      </div>
    </div>
  );
};
export default GroceryLayout;
