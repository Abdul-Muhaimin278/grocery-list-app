import { Button } from "reactstrap";

const HeroSection = () => {
  return (
    <>
      <h1>Smart Grocery Shopping, Made Simple</h1>
      <p className="fs-4">
        Organize your grocery lists, track prices, and save money with our
        intelligent shopping assistant. Join over 50,000 smart shoppers saving
        time and money every day.
      </p>
      <Button color="success">Get Started Free</Button>
      <Button color="light" className="text-success">
        Watch Demo
      </Button>
    </>
  );
};
export default HeroSection;
