import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
  const { uid } = useSelector((state) => state.auth);

  if (uid) {
    return <Navigate to="/groceries-list" replace />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default AuthLayout;
