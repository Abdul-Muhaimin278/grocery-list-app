/* eslint-disable react/prop-types */
import { LuShoppingBasket } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Col, Container, Row, Spinner } from "reactstrap";
import { signOutAction } from "../store/auth/AuthThunk";

const Header = ({ layout }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status, user } = useSelector((state) => state.auth);

  const handleNavBarBrand = () => {
    navigate("/");
  };

  const handleLogout = () => {
    dispatch(signOutAction()).finally(() => navigate("/auth/login"));
  };
  const handleLogin = () => {
    navigate("/auth/login");
  };
  const handleSignup = () => {
    navigate("/auth/signup");
  };
  return (
    <>
      <Container fluid>
        <nav className="container px-4 py-3 border-bottom">
          <Row className=" justify-content-between align-items-center">
            <Col
              className="d-flex justify-content-start align-items-center"
              style={{ cursor: "pointer" }}
            >
              <LuShoppingBasket size="32px" color="#059669" className="mb-2" />
              <h5 className="mx-2 fw-bold" onClick={handleNavBarBrand}>
                GrocerySave
              </h5>
            </Col>
            <Col className="d-flex justify-content-end align-items-center gap-2">
              {layout === "MainLayout" ? (
                <>
                  <Button color="light" onClick={handleLogin}>
                    sign in
                  </Button>
                  <Button
                    color="success"
                    className="text-white"
                    onClick={handleSignup}
                  >
                    signup
                  </Button>
                </>
              ) : (
                <>
                  <p className="m-0">Welcome, {user}</p>
                  <Button
                    color="success"
                    onClick={handleLogout}
                    disabled={status === "signing out"}
                  >
                    {status === "signing out" ? (
                      <Spinner size="sm" />
                    ) : (
                      "logout"
                    )}
                  </Button>
                </>
              )}
            </Col>
          </Row>
        </nav>
      </Container>
    </>
  );
};
export default Header;
