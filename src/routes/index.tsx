import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "../modules/dashboard";
import Login from "../modules/login";

const Routes = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/auth",
      element: <Login />,
    },
  ]);
  return <RouterProvider router={routes} />;
};

export default Routes;
