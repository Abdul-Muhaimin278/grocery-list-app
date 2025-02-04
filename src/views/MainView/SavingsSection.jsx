import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";

const SavingsSection = () => {
  return (
    <div className="bg-body-secondary py-5">
      <Container className="pb-4">
        <Row className="text-center mb-4">
          <h2 className="fw-bold">Calculate Your Savings</h2>
          <p className="text-secondary">
            See how much you could save with GrocerySave
          </p>
        </Row>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card className="shadow-lg border-0 rounded-4">
              <CardBody className="p-4 text-start">
                <Row>
                  <Col>
                    <h6 className="fw-medium">Monthly Grocery Spend</h6>
                    <h3 className="text-success fw-bold">$600</h3>
                    <p className="text-secondary">Average household spend</p>
                  </Col>
                  <Col>
                    <h6 className="fw-bold">Potential Savings</h6>
                    <h3 className="text-success fw-bold">$180</h3>
                    <p className="text-secondary">30% average savings</p>
                  </Col>
                </Row>
                <Button
                  color="success"
                  block
                  className="mt-3 px-4 py-2 fw-medium rounded shadow-sm"
                >
                  Start Saving Today
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SavingsSection;
