import { useState } from "react";
import {
  LuMail,
  LuLock,
  LuEye,
  LuEyeOff,
  LuShoppingBasket,
} from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../store/auth/authThunk";
import { Spinner } from "reactstrap";

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
    <>
      <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white flex flex-col justify-center">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="flex justify-center">
            <LuShoppingBasket className="h-12 w-12 text-emerald-600" />
          </div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Welcome back
          </h2>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleLogin}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <LuMail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    required
                    name="email"
                    id="email"
                    type="email"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                    placeholder="you@example.com"
                    onChange={handleAuthData}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <LuLock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    required
                    name="password"
                    id="password"
                    type="passsord"
                    className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                    onChange={handleAuthData}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    <div
                      onClick={() => setShowPassword(!showPassword)}
                      className="cursor-pointer"
                    >
                      {showPassword ? (
                        <LuEyeOff className="h-5 w-5 text-gray-400" />
                      ) : (
                        <LuEye className="h-5 w-5 text-gray-400" />
                      )}
                    </div>
                  </button>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                  disabled={status === "signing in"}
                >
                  {status === "signing in" ? <Spinner size="sm" /> : "Sign in"}
                </button>
              </div>
            </form>
            <p className="mt-5 text-center text-sm text-gray-600">
              Don&#39;t have an account?
              <Link
                className="font-medium decoration-0 text-emerald-600 hover:text-emerald-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                to="/auth/signup"
                data-discover="true"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
