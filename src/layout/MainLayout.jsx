import Header from "../components/Header";
import FeaturesSection from "../views/MainView/FeaturesSection";
import FooterSection from "../views/MainView/FooterSection";
import HeroSection from "../views/MainView/HeroSection";
import SavingsSection from "../views/MainView/SavingsSection";
import ShoppersSection from "../views/MainView/ShoppersSection";
import WorksSection from "../views/MainView/WorksSections";

const MainLayout = () => {
  return (
    <>
      <Header layout="MainLayout" />
      <section className="bg-body-tertiary">
        <HeroSection />
        <FeaturesSection />
        <WorksSection />
        <ShoppersSection />
        <SavingsSection />
        <FooterSection />
      </section>
    </>
  );
};

export default MainLayout;
