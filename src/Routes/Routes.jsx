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
        index: true,
        element: <SimpleComponent />,
      },
      {
        path: '/events',
        element: <Events />,
      },
      {
        path: "/my-bookings",
        element: <MyBookings />
      },
      {
        path: "add-event",
        element: <AddEvent />
      },
      {
        path: "/signIn",
        element: <SignIn />
      },
      {
        path: "/signUp",
        element: <SignUp />
      }
    ],
  },
]);