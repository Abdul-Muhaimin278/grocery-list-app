import { useState } from "react";
import {
  LuEye,
  LuEyeOff,
  LuLock,
  LuMail,
  LuShoppingBasket,
} from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  Form,
  FormGroup,
  Label,
  Button,
  Card,
  CardBody,
  Spinner,
} from "reactstrap";
import { signUp } from "../store/auth/AuthThunk";

const SignupPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status } = useSelector((state) => state.auth);

  const [AuthData, setAuthData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    const { username, email, password } = AuthData;
    dispatch(signUp({ username, email, password })).finally(() => {
      navigate("/groceries-list");
      setAuthData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    });
  };

  const handleAuthData = (e) => {
    const { name, value } = e.target;
    setAuthData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Container
      fluid
      className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light"
    >
      <div className="text-center my-3">
        <LuShoppingBasket size="50px" color="#059669" className="my-2" />
        <h2 className="my-2 fw-bold text-dark">Create an account</h2>
      </div>

      <Card className="shadow-sm border-light p-4" style={{ width: "450px" }}>
        <CardBody>
          <Form onSubmit={handleSignup}>
            <FormGroup className="mb-4">
              <Label for="username" className="fw-medium text-dark mb-1">
                Full Name
              </Label>
              <div className="input-div rounded">
                <LuMail size="20px" color="#aaa" />
                <input
                  id="username"
                  type="username"
                  name="username"
                  value={AuthData.username}
                  placeholder="John Doe"
                  required
                  className="input-border"
                  onChange={handleAuthData}
                />
              </div>
            </FormGroup>
            <FormGroup className="mb-4">
              <Label for="email" className="fw-medium text-dark mb-1">
                Email Address
              </Label>
              <div className="input-div rounded">
                <LuMail size="20px" color="#aaa" />
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={AuthData.email}
                  placeholder="you@example.com"
                  required
                  className="input-border"
                  onChange={handleAuthData}
                />
              </div>
            </FormGroup>
            <FormGroup className="mb-4">
              <Label for="password" className="fw-medium text-dark mb-1">
                Password
              </Label>
              <div className="input-div rounded">
                <LuLock size="20px" color="#aaa" />
                <input
                  id="password"
                  name="password"
                  value={AuthData.password}
                  type={showPassword ? "text" : "password"}
                  required
                  className="input-border"
                  onChange={handleAuthData}
                />
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ cursor: "pointer" }}
                >
                  {showPassword ? (
                    <LuEyeOff size="20px" color="#aaa" />
                  ) : (
                    <LuEye size="20px" color="#aaa" />
                  )}
                </div>
              </div>
            </FormGroup>
            <FormGroup className="mb-4">
              <Label for="confirm" className="fw-medium text-dark mb-1">
                Comfirm Password
              </Label>
              <div className="input-div rounded">
                <LuLock size="20px" color="#aaa" />
                <input
                  id="confirm"
                  type="password"
                  name="confirmPassword"
                  value={AuthData.confirmPassword}
                  required
                  className="input-border"
                  onChange={handleAuthData}
                />
              </div>
            </FormGroup>

            <Button color="success" type="submit" block className="mt-3 py-1">
              {status === "signing up" ? (
                <Spinner size="sm" />
              ) : (
                "Create account"
              )}
            </Button>
          </Form>
          <div className="mt-4 text-center">
            <p className="text-muted">
              Already have an account?
              <Link
                to="/auth/login"
                className="text-success text-decoration-none"
              >
                {` Sign in`}
              </Link>
            </p>
          </div>
        </CardBody>
      </Card>
    </Container>
  );
};

export default SignupPage;
