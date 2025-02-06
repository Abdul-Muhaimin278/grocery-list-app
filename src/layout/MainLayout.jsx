import { useSelector } from "react-redux";
import Header from "../components/Header";
import LandingPage from "../views/MainView/LandingPage";
import { Navigate } from "react-router-dom";

const MainLayout = () => {
  const { uid } = useSelector((state) => state.auth);

  if (uid) {
    return <Navigate to="/groceries-list" replace />;
  }

  return (
    <>
      <Header layout="MainLayout" />
      <section className="bg-body-tertiary">
        <LandingPage />
      </section>
    </>
  );
};

export default MainLayout;
