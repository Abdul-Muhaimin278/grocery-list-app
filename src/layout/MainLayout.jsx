import Header from "../components/Header";
import HeroSection from "../views/MainView/HeroSection";

const MainLayout = () => {
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
