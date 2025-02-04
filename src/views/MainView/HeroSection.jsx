import { LuShield, LuStar, LuUsers } from "react-icons/lu";
import { Button } from "reactstrap";

const HeroSection = () => {
  return (
    <>
      <section className="container py-5">
        <div className="row g-4 align-items-center justify-content-center">
          <h1 className="fw-bold text-center pt-3">
            Smart Grocery Shopping,
            <span className="text-success"> Made Simple</span>{" "}
          </h1>
          <p className="fs-5 text-center text-secondary">
            Organize your grocery lists, track prices, and save money with our
            intelligent <br /> shopping assistant. Join over 50,000 smart
            shoppers saving time and money <br /> every day.
          </p>
          <div className=" d-flex align-items-center justify-content-center">
            <Button color="success" className="text-light py-2 px-4 me-2">
              Get Started Free
            </Button>
            <Button color="light" className="text-success py-2 px-4 ms-2">
              Watch Demo
            </Button>
          </div>
          <div
            className="d-flex justify-content-center
           align-items-center"
          >
            <div className="d-flex align-items-center mx-4">
              <LuStar color="#facc15" size="20px" className="me-2" />
              4.9/5 rating
            </div>
            <div className="d-flex align-items-center mx-4 ">
              <LuUsers color="#059669" size="20px" className="me-2" />
              50K+ users
            </div>
            <div className="d-flex align-items-center mx-4 ">
              <LuShield color="#059669" size="20px" className="me-2" />
              Secure & Private
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HeroSection;
