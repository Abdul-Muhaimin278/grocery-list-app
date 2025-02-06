import Header from "../components/Header";
import LandingPage from "../views/MainView/LandingPage";

const MainLayout = () => {
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
