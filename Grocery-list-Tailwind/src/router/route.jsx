import { createBrowserRouter, Navigate } from "react-router-dom";
import GroceryLayout from "../layout/GroceryLayout";
import MainLayout from "../layout/MainLayout";
import AuthLayout from "../layout/AuthLayout";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import CategoryLists from "../views/GroceryView/CategoryLists";
import NoCategory from "../views/GroceryView/NoCategory";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
  {
    path: "groceries-list",
    element: <GroceryLayout />,
    children: [
      {
        index: true,
        element: <NoCategory />,
      },
      {
        path: ":categoryId",
        element: <CategoryLists />,
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignupPage />,
      },
    ],
  },
  { path: "*", element: <Navigate to="/auth/login" replace /> },
]);
