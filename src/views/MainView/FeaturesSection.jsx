import { LuCircleCheckBig, LuClock4, LuSmartphone } from "react-icons/lu";
import { Card, Col } from "reactstrap";

const FeaturesSection = () => {
  const cardsContent = [
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
  return (
    <>
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
            {cardsContent.map(({ icon: Icon, para, title }) => (
              <Col lg={4} key={title}>
                <Card className="d-flex justify-content-between align-items-start  px-3 py-2">
                  <div className="bg-body-secondary rounded-3 p-2 my-2">
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
    </>
  );
};

export default FeaturesSection;
