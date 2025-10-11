import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { TbFidgetSpinner } from "react-icons/tb";
import toast from "react-hot-toast";

export default function Navbar() {
  const { user, loading, logOut } = useAuth();

  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("User logged out successfully");
        toast.success("Logged out successfully!");
      })
      .catch((error) => {
        console.error("Logout error:", error);
        toast.error("Failed to logout. Please try again.");
      });
  };

  return (
    <div className="navbar bg-base-100 shadow-lg sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/events">Events</NavLink></li>
            <li><NavLink to="/my-bookings">My Bookings</NavLink></li>
            <li><NavLink to="/add-event">Add Event</NavLink></li>
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl font-bold text-primary">
          Eventify
        </NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-primary font-semibold" : "hover:text-primary"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive ? "text-primary font-semibold" : "hover:text-primary"
              }
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-bookings"
              className={({ isActive }) =>
                isActive ? "text-primary font-semibold" : "hover:text-primary"
              }
            >
              My Bookings
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/add-event"
              className={({ isActive }) =>
                isActive ? "text-primary font-semibold" : "hover:text-primary"
              }
            >
              Add Event
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        {loading ? (
          <div className="flex items-center gap-2">
            <TbFidgetSpinner className="animate-spin h-5 w-5" />
            <span className="text-sm">Loading...</span>
          </div>
        ) : user ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img 
                  alt="Profile" 
                  src={user.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} 
                />
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li className="menu-title">
                <span className="text-primary font-semibold">{user.displayName || "User"}</span>
              </li>
              <li className="menu-title">
                <span className="text-xs text-gray-500">{user.email}</span>
              </li>
              <div className="divider my-1"></div>
              <li><a className="hover:bg-primary hover:text-primary-content">Profile</a></li>
              <li><a className="hover:bg-primary hover:text-primary-content">Settings</a></li>
              <li><button onClick={handleLogout} className="hover:bg-error hover:text-error-content">Logout</button></li>
            </ul>
          </div>
        ) : (
          <div className="flex gap-2">
            <NavLink to="/signIn" className="btn btn-ghost btn-sm">
              Sign In
            </NavLink>
            <NavLink to="/signUp" className="btn btn-primary btn-sm">
              Sign Up
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}