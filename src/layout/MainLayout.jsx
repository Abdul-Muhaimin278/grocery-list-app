import { Navigate } from "react-router-dom";
import Header from "../components/Header";
import HeroSection from "../views/MainView/HeroSection";
import { useSelector } from "react-redux";

const MainLayout = () => {
  const { uid } = useSelector((state) => state.auth);

  console.log("UID===>", uid);

  if (uid) {
    return <Navigate to="/groceries-list" replace />;
  }
  return (
    <>
      <Header layout="MainLayout" />
      <section className="bg-body-tertiary">
        <HeroSection />
      </section>
    </>
  );
};

export default MainLayout;
