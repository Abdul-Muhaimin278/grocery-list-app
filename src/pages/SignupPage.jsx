import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardBody,
} from "reactstrap";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const SignupPage = () => {
  return (
    <div className="signup-container d-flex align-items-center justify-content-center vh-100 bg-light">
      <Container className="text-center">
        <Card
          className="shadow-sm p-3 bg-white rounded"
          style={{ maxWidth: "400px", margin: "auto" }}
        >
          <CardBody>
            <h3 className="mb-4">Create your account</h3>
            <Form>
              <FormGroup>
                <Label for="fullName">Full Name</Label>
                <div className="input-group">
                  <span className="input-group-text">
                    <FaUser />
                  </span>
                  <Input type="text" id="fullName" placeholder="John Doe" />
                </div>
              </FormGroup>

              <FormGroup>
                <Label for="email">Email Address</Label>
                <div className="input-group">
                  <span className="input-group-text">
                    <FaEnvelope />
                  </span>
                  <Input
                    type="email"
                    id="email"
                    placeholder="you@example.com"
                  />
                </div>
              </FormGroup>

              <FormGroup>
                <Label for="password">Password</Label>
                <div className="input-group">
                  <span className="input-group-text">
                    <FaLock />
                  </span>
                  <Input
                    type="password"
                    id="password"
                    placeholder="Enter password"
                  />
                </div>
              </FormGroup>

              <FormGroup>
                <Label for="confirmPassword">Confirm Password</Label>
                <div className="input-group">
                  <span className="input-group-text">
                    <FaLock />
                  </span>
                  <Input
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirm password"
                  />
                </div>
              </FormGroup>

              <Button color="success" block className="mt-3">
                Create Account
              </Button>
            </Form>
            <p className="mt-3">
              Already have an account? <a href="/signin">Sign in</a>
            </p>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
};

export default SignupPage;
