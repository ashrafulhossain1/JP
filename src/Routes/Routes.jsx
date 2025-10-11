import { createBrowserRouter } from "react-router-dom";
import MainLayout from '../Layout/MainLayout.jsx';
import SimpleComponent from '../SimpleComponent.jsx';
import Events from "../Pages/Events/Events.jsx";
import MyBookings from "../Pages/MyBookings/MyBookings.jsx";
import AddEvent from "../Pages/AddEvent/AddEvent.jsx";
import SignIn from "../Auth/SignIn.jsx";
import SignUp from "../Auth/SignUp.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: '/events',
        element: <Events></Events> ,
      },
      {
        path: "/my-bookings",
        element: <MyBookings></MyBookings>
      },
      {
        path: "add-event",
        element: <AddEvent></AddEvent>
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>
      }
    ],
  },
]);