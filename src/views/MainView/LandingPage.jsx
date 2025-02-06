import { Button, Card, CardBody, Col, Container, Row } from "reactstrap";
import StepsSection from "./StepsSection";
import {
  LuCircleCheckBig,
  LuClock4,
  LuShield,
  LuSmartphone,
  LuStar,
  LuUsers,
} from "react-icons/lu";

const shoppersContent = [
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
const featuresContent = [
  {
    icon: LuCircleCheckBig,
    para: "Create and manage multiple shopping lists with smart categorization and priority settings.",
    title: "Smart Lists",
  },
  {
    icon: LuClock4,
    para: "Track price changes over time and get notified when your favorite items go on sale.",
    title: "Price History",
  },
  {
    icon: LuSmartphone,
    para: "Access your lists anywhere with our mobile-friendly design and offline support.",
    title: "Mobile Ready",
  },
];

const LandingPage = () => {
  return (
    <>
      {/* ======= HERO SECTION ==== */}
      <section className="container py-5">
        <div className="row g-4 align-items-center justify-content-center">
          <h1 className="fw-bold text-center pt-3">
            Smart Grocery Shopping,
            <span className="text-success"> Made Simple</span>
          </h1>
          <p className="fs-5 text-center text-secondary">
            Organize your grocery lists, track prices, and save money with our
            intelligent <br /> shopping assistant. Join over 50,000 smart
            shoppers saving time and money <br /> every day.
          </p>
          <div className="d-flex align-items-center justify-content-center">
            <Button color="success" className="text-light py-2 px-4 me-2">
              Get Started Free
            </Button>
            <Button color="white" className="text-success py-2 px-4 ms-2">
              Watch Demo
            </Button>
          </div>
          <div
            className="d-flex justify-content-center
           align-items-center"
          >
            <div className="d-flex align-items-center mx-4 text-secondary">
              <LuStar color="#facc15" size="20px" className="me-2" />
              4.9/5 rating
            </div>
            <div className="d-flex align-items-center mx-4 text-secondary ">
              <LuUsers color="#059669" size="20px" className="me-2" />
              50K+ users
            </div>
            <div className="d-flex align-items-center mx-4 text-secondary ">
              <LuShield color="#059669" size="20px" className="me-2" />
              Secure & Private
            </div>
          </div>
        </div>
      </section>

      {/* ======= FEATURES SECTION ==== */}
      <section className="container py-5 mt-5">
        <div className="row g-4 align-items-center justify-content-center">
          <div className="my-5">
            <h2 className="fw-bold text-center ">
              Everything you need to shop smarter
            </h2>
            <p className="fs-5 text-center text-secondary">
              Simple yet powerful features to make grocery shopping a breeze
            </p>
          </div>

          <div className="row justify-content-between align-items-center">
            {featuresContent.map(({ icon: Icon, para, title }) => (
              <Col lg={4} key={title}>
                <Card className="d-flex justify-content-between align-items-start rounded-3 border-light-subtle  px-3 py-2">
                  <div className="bg-body-secondary p-2 my-2">
                    <Icon color="#059669" size="25px" />
                  </div>
                  <h5 className="my-2">{title}</h5>
                  <p className="text-secondary my-2">{para}</p>
                </Card>
              </Col>
            ))}
          </div>
        </div>
      </section>

      {/* ======= STEPS SECTION ==== */}
      <StepsSection />

      {/* ======= SAVINGS SECTION ==== */}
      <section className="bg-body-secondary py-5">
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
      </section>

      {/* ======= SHOPPERS SECTION ==== */}
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
            {shoppersContent.map(({ icon, para, title, job }) => (
              <Col lg={4} key={title}>
                <Card
                  className="d-flex justify-content-between align-items-start py-3 px-2 border-light-subtle"
                  style={{ height: "14rem" }}
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

      {/* ======= FOOTER SECTION ==== */}
      <footer className="bg-success text-white text-center py-5">
        <Container>
          <h2 className="fw-bold">Start saving on groceries today</h2>
          <p className="mt-3 fs-5">
            Join thousands of smart shoppers who are already saving time and
            money
            <br />
            with GrocerySave. No credit card required.
          </p>
          <div className="d-flex justify-content-center gap-3 mt-4">
            <Button color="light" className="text-success fw-bold px-4 py-3">
              Sign Up Now - It&#39;s Free
            </Button>
            <Button
              color="success"
              className="border-white text-white fw-bold px-4"
            >
              Schedule a Demo
            </Button>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default LandingPage;
