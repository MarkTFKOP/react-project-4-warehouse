import Userlayouts from "../Layouts/User/userlayouts";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/About-us/about-us";
import Profile from "../pages/Profile/Profile";
import WarehouseInfo from "../pages/WarehouseInfo/WarehouseInfo";
import ErrorPage from "./errorroute";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import WarehouseList from "../pages/warehouse-list/Warehouse";
import Userhome from "../pages/Profile/My-Home/myhome";
import Userinfo from "../pages/Profile/User-details/myinfo";
let router = createBrowserRouter([
  {
    path: "/",
    element: <Userlayouts />,
    errorElement: <ErrorPage />,
    // loader:loader,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "warehouselist",
        element: <WarehouseList />,
      },
      {
        path: "warehouseinfo",
        element: <WarehouseInfo />,
      },
      {
        path: "profile",
        element: <Profile />,
        children: [
          { path: "mydetails", element: <Userinfo /> },
          { path: "myhome", element: <Userhome /> },
        ],
      },
    ],
  },
  {
    path: "contact-us",
    element: <AboutUs />,
    errorElement: <ErrorPage />,
  },
]);
// eslint-disable-next-line no-self-assign, no-const-assign
export default router = router;
