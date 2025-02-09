import Header from "../components/Header";
import LandingPage from "../views/MainView/LandingPage";

const MainLayout = () => {
  return (
    <>
      <Header layout="MainLayout" />
      <LandingPage />
    </>
  );
};

export default MainLayout;
