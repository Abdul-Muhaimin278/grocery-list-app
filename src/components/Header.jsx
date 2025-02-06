/* eslint-disable react/prop-types */
import { LuMenu, LuShoppingBasket } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Col, Container, Row, Spinner } from "reactstrap";
import { signOutAction } from "../store/auth/AuthThunk";

const Header = ({ layout, toggleSidebar, isMobile }) => {
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
      <Container fluid className="border-bottom">
        <nav className="px-sm-0 px-md-4 py-3">
          <Row className=" justify-content-between align-items-center">
            <Col
              className="d-flex justify-content-start align-items-center"
              style={{ cursor: "pointer" }}
            >
              {isMobile ? (
                <LuMenu size={32} color="#059669" onClick={toggleSidebar} />
              ) : (
                <LuShoppingBasket size={32} color="#059669" />
              )}
              <h5 className="mx-2 mb-0 fw-bold" onClick={handleNavBarBrand}>
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
                  <p className="mb-0 text-truncate ellipses">Welcome, {user}</p>
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
