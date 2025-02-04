import { Card, Col, Container, Row } from "reactstrap";

const ShoppersSection = () => {
  const cardsContent = [
    {
      title: "Sarah Johnson",
      icon: "S",
      job: "Busy Mom",
      para: "GrocerySave has completely transformed how I shop for my family. I save both time and money every week!",
    },
    {
      title: "Mike Chen",
      icon: "M",
      job: "Budget Conscious",
      para: "The price tracking feature is amazing. I've saved over $200 in the past month alone.",
    },
    {
      title: "Emily Davis",
      icon: "E",
      job: "Health Enthusiast",
      para: "I love how I can organize my shopping lists by category. Makes healthy shopping so much easier!",
    },
  ];
  return (
    <>
      <Container className="py-5 mt-5">
        <Row className="g-4 align-items-center justify-content-center">
          <div className="my-5">
            <h2 className="fw-bold text-center ">
              Everything you need to shop smarter
            </h2>
            <p className="fs-5 text-center text-secondary">
              Simple yet powerful features to make grocery shopping a breeze
            </p>
          </div>

          <Row className="justify-content-between align-items-center">
            {cardsContent.map(({ icon, para, title, job }) => (
              <Col lg={4} key={title}>
                <Card
                  className="d-flex justify-content-between align-items-start px-4 py-2 border-light-subtle"
                  style={{ height: "10rem" }}
                >
                  <div className="d-flex align align-items-center justify-content-between">
                    <div className="bg-body-secondary rounded-circle px-4 py-3">
                      <p className="m-0 fw-bold text-success">{icon}</p>
                    </div>
                    <div className="ms-3 mt-2">
                      <h5 className="mb-1">{title}</h5>
                      <p className="text-secondary">{job}</p>
                    </div>
                  </div>
                  <p className="text-secondary my-2 fst-italic">{`"${para}"`}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </Row>
      </Container>
    </>
  );
};

export default ShoppersSection;
