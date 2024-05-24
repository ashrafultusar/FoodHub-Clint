import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";

import AdminRoutes from "./AdminRoutes";
import AddItems from "../Pages/Dashboard/AddItems";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "order/:category",
        element: <Order></Order>,
      },
    ],
  },

  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard></Dashboard>
      </PrivateRoutes>
    ),
    children: [
      // normal user routes
      {
        path: "cart",
        element: <Cart></Cart>,
      },

      // admines routes
      {
        path: "addItems",
        element: (
          <AdminRoutes>
            <AddItems></AddItems>
          </AdminRoutes>
        ),
      },

      {
        path: "users",
        element: (
          <AdminRoutes>
            <AllUsers></AllUsers>
          </AdminRoutes>
        ),
      },
    ],
  },
]);
