import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AllServices from "../Pages/AllServices/AllServices";
import Contact from "../Pages/Contact/Contact";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRouter from "./PrivateRouter";
import CheckOut from "../Pages/Checkout/CheckOut";
import Bookings from "../Pages/Bookings/Bookings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/bookings",
        element: <Bookings />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/all-services",
        element: (
          <PrivateRouter>
            <AllServices />
          </PrivateRouter>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRouter>
            <CheckOut />
          </PrivateRouter>
        ),
        loader: ({params}) => fetch(`http://localhost:5000/all-services/${params.id}`)
      },
      
    ],
  },
]);

export default router;
