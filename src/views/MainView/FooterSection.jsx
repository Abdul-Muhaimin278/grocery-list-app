/* eslint-disable react/no-unescaped-entities */
import { Container, Button } from "reactstrap";

const FooterSection = () => {
  return (
    <div className="bg-success text-white text-center py-5">
      <Container>
        <h2 className="fw-bold">Start saving on groceries today</h2>
        <p className="mt-3 fs-5">
          Join thousands of smart shoppers who are already saving time and money
          <br />
          with GrocerySave. No credit card required.
        </p>
        <div className="d-flex justify-content-center gap-3 mt-4">
          <Button color="light" className="text-success fw-bold px-4 py-3">
            Sign Up Now - It's Free
          </Button>
          <Button
            color="success"
            className="border-white text-white fw-bold px-4"
          >
            Schedule a Demo
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default FooterSection;
