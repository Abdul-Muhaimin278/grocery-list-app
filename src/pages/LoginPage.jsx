import { useState } from "react";
import {
  Container,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  InputGroup,
  InputGroupText,
} from "reactstrap";
import { LuMail, LuLock, LuEye, LuEyeOff } from "react-icons/lu";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="shadow p-4" style={{ width: "350px" }}>
        <CardBody>
          <h3 className="text-center mb-4">Login</h3>
          <Form>
            <FormGroup>
              <Label>Email Address</Label>
              <InputGroup>
                <InputGroupText>
                  <LuMail />
                </InputGroupText>
                <Input type="email" placeholder="you@example.com" required />
              </InputGroup>
            </FormGroup>

            <FormGroup>
              <Label>Password</Label>
              <InputGroup>
                <InputGroupText>
                  <LuLock />
                </InputGroupText>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  required
                />
                <InputGroupText
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ cursor: "pointer" }}
                >
                  {showPassword ? <LuEyeOff /> : <LuEye />}
                </InputGroupText>
              </InputGroup>
            </FormGroup>

            <Button color="success" block>
              Login
            </Button>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
};

export default LoginPage;
