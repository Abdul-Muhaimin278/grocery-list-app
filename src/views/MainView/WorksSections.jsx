import { useState } from "react";
import { Button, Row, Col, Card, CardBody, Container } from "reactstrap";
import {
  LuArrowRight,
  LuBell,
  LuCircleCheck,
  LuCirclePlus,
  LuListPlus,
  LuSearch,
  LuShare,
  LuSmartphone,
  LuStore,
  LuTag,
  LuTrendingUp,
  LuWallet,
} from "react-icons/lu";
import "bootstrap/dist/css/bootstrap.min.css";

const steps = [
  {
    title: "Create Lists",
    content: "Create custom shopping lists for different stores or occasions",
    icon: LuListPlus,
    triIcons: [
      { icon: LuStore, text: "Organize by store" },
      { icon: LuShare, text: "Share with family" },
      { icon: LuBell, text: "Set reminders" },
    ],
  },
  {
    title: "Add Items",
    content: "Quickly add items with our smart autocomplete feature.",
    icon: LuCirclePlus,
    triIcons: [
      { icon: LuSearch, text: "Smart Search" },
      { icon: LuTag, text: "Auto-categorize" },
      { icon: LuSmartphone, text: "Voice Input" },
    ],
  },
  {
    title: "Track Prices",
    content: "Monitor price changes and find the best deals",
    icon: LuTrendingUp,
    triIcons: [
      { icon: LuBell, text: "Price alerts" },
      { icon: LuStore, text: "Compare stores" },
      { icon: LuTag, text: "Deal finder" },
    ],
  },
  {
    title: "Save Money",
    content: "Save up to 30% on your grocery bills.",
    icon: LuWallet,
    triIcons: [
      { icon: LuCircleCheck, text: "Track savings" },
      { icon: LuTrendingUp, text: "Spending insights" },
      { icon: LuBell, text: "Budget alerts" },
    ],
  },
];

const WorksSection = () => {
  const [activeStep, setActiveStep] = useState(1);

  const activeBtnClass =
    "shadow-lg border-top-0 border-bottom-0 border-end-0 border-start border-5 border-success";

  return (
    <Container className="my-5 pb-5">
      <Row className="py-5 mt-5">
        <h2 className="fw-bold text-center pt-3">How GrocerySave Works</h2>
        <p className="fs-5 text-center text-secondary">
          Get started in minutes and save hours every week
        </p>
      </Row>
      <Row className="justify-content-between">
        <Col md={3} sm={12}>
          <div className="d-flex flex-column gap-3">
            {steps.map(({ icon: Icon, title }, index) => (
              <button
                key={index}
                className={`btn border-0 text-start px-3 rounded-3 d-flex align-items-center ${
                  activeStep === index && activeBtnClass
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className="d-flex align-items-center">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle bg-secondary-subtle"
                    style={{ width: "2.5rem", height: "2.5rem" }}
                  >
                    <Icon size="24" color="#059669" />
                  </div>
                  <div className="ms-3">
                    <div className="d-flex align-items-center">
                      <span className="text-success">
                        Step {index + 1}
                        {activeStep === index && (
                          <LuArrowRight
                            size="18"
                            color="#059669"
                            className="ms-2"
                          />
                        )}
                      </span>
                    </div>
                    <h5 className="fw-medium">{title}</h5>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </Col>
        <Col md={8} sm={12} className="border-0 shadow-lg p-0">
          <Card className="border-0">
            <CardBody className="border-0">
              <h3>{steps[activeStep].title}</h3>
              <p>{steps[activeStep].content}</p>
              <Row className="d-flex justify-content-between mt-4">
                {steps[activeStep].triIcons.map(({ icon: Icon, text }) => (
                  <Col key={text} className="text-center">
                    <div className="d-flex flex-column align-items-center justify-content-center bg-light px-3 py-4 rounded shadow-sm">
                      <Icon size="24" color="#059669" />
                      <p className="mt-2 fw-medium text-secondary">{text}</p>
                    </div>
                  </Col>
                ))}
              </Row>
              <div className="d-flex justify-content-between mt-4">
                {activeStep > 0 && (
                  <Button
                    color="secondary"
                    onClick={() => setActiveStep(activeStep - 1)}
                  >
                    Previous Step
                  </Button>
                )}
                {activeStep < steps.length - 1 && (
                  <Button
                    color="success"
                    onClick={() => setActiveStep(activeStep + 1)}
                  >
                    Next Step
                  </Button>
                )}
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default WorksSection;
