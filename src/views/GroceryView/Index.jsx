import { Container } from "reactstrap";

const Index = () => {
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-start w-auto m-3 p-0 bg-light"
    >
      <div className="py-4 rounded text-center text-secondary bg-light w-100 border-dashed">
        <h5>Please select a category to view lists</h5>
      </div>
    </Container>
  );
};

export default Index;
