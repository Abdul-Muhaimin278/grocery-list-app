import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../views/GroceryView/Sidebar";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const GroceryLayout = () => {
  const { uid } = useSelector((state) => state.auth);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  if (!uid) {
    return <Navigate to="/auth/login" replace />;
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="d-flex">
      <Sidebar
        isOpen={isOpen}
        toggleSidebar={() => setIsOpen(!isOpen)}
        isMobile={isMobile}
      />
      <div className="flex-grow-1">
        <Header
          layout="GroceryLayout"
          toggleSidebar={() => setIsOpen(!isOpen)}
          isMobile={isMobile}
        />
        <Outlet />
      </div>
    </div>
  );
};
export default GroceryLayout;
