import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import API from "./pages/API/API";
import Form from "./pages/Form/Form";
import ErrorPage from "./pages/Error/Error";

const router = createHashRouter([
  {
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "form",
            element: <Form />,
          },
          {
            path: "api",
            element: <API />,
          },
        ],
      },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
