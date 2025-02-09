/* eslint-disable react/prop-types */
import { LuShoppingBasket } from "react-icons/lu";
import { NavLink } from "react-router-dom";

const Header = ({ layout }) => {
  return (
    <>
      <nav className="sticky top-0 z-50 bg-white border-b-0 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <LuShoppingBasket className="h-8 w-8 text-emerald-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">
                  GrocerySave
                </span>
              </div>
            </div>
            {layout === "MainLayout" ? (
              <div className="ml-6 flex items-center">
                <>
                  <button
                    className="bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                    to="/auth/login"
                  >
                    Sign in
                  </button>
                  <button
                    className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                    to="/auth/signup"
                  >
                    Sign up
                  </button>
                </>
              </div>
            ) : (
              <div className="flex items-center gap-x-2">
                <p className="text-gray-700 mr-4">
                  Welcome, abdulmuhaimin278@gmail.com
                </p>
                <button className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500">
                  logout
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
