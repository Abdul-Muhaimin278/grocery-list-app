/* eslint-disable react/prop-types */
import { LuShoppingBasket } from "react-icons/lu";
import { Button, Col, Row } from "reactstrap";

const Header = ({ layout }) => {
  return (
    <>
      <nav className="container-fluid px-4 py-3 border-bottom">
        <Row className="justify-content-between align-items-center">
          <Col
            md={4}
            className="d-flex justify-content-center align-items-center"
          >
            <LuShoppingBasket size="32px" color="#059669" className="mb-2" />
            <h5 className="mx-2 fw-bold">GrocerySave</h5>
          </Col>
          <Col
            xl={3}
            lg={5}
            md={6}
            sm={8}
            xs={8}
            className="d-flex justify-content-center align-items-center gap-2"
          >
            {layout === "MainLayout" ? (
              <>
                <Button color="light">sign in</Button>
                <Button color="success" className="text-white">
                  signup
                </Button>
              </>
            ) : (
              <>
                <p className="m-0">Welcome, test@nextpak.org</p>
                <Button color="success">logout</Button>
              </>
            )}
          </Col>
        </Row>
      </nav>
    </>
  );
};
export default Header;
