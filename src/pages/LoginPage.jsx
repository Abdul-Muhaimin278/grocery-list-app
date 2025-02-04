/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import {
  Container,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Button,
  Spinner,
} from "reactstrap";
import {
  LuMail,
  LuLock,
  LuEye,
  LuEyeOff,
  LuShoppingBasket,
} from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../store/auth/AuthThunk";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status } = useSelector((state) => state.auth);

  const [authData, setAuthData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleAuthData = (e) => {
    const { name, value } = e.target;
    setAuthData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = authData;
    dispatch(signIn({ email, password })).finally(() => {
      navigate("/groceries-list");
      setAuthData({
        email: "",
        password: "",
      });
    });
  };
  return (
    <Container
      fluid
      className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light"
    >
      <div className="text-center my-3">
        <LuShoppingBasket size="50px" color="#059669" className="my-2" />
        <h2 className="my-2 fx-bold text-dark">Welcome Back</h2>
      </div>

      <Card className="shadow-sm border-light p-4" style={{ width: "450px" }}>
        <CardBody>
          <Form onSubmit={handleLogin}>
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
                  value={authData.email}
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
                  value={authData.password}
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

            <Button
              color="success"
              block
              type="submit"
              className="mt-3 py-1"
              disabled={status === "signing in"}
            >
              {status === "signing in" ? <Spinner size="sm" /> : "Sign in"}
            </Button>
          </Form>
          <div className="mt-4 text-center">
            <p className="text-muted">
              Don't have an account?
              <Link
                to="/auth/signup"
                className="text-success text-decoration-none"
              >
                {` Sign Up`}
              </Link>
            </p>
          </div>
        </CardBody>
      </Card>
    </Container>
  );
};

export default LoginPage;
