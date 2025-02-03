import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../views/GroceryView/Sidebar";

const GroceryLayout = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1">
        <Header layout="GroceryLayout" />
        <Outlet />
      </div>
    </div>
  );
};
export default GroceryLayout;
