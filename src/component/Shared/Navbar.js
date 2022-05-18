import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="navbar py-4 bg-gray-800 md:px-12">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Todo
        </Link>
      </div>

      <div className="navbar-end">
        {user ? (
          <button
            onClick={async () => {
              await signOut(auth);
              toast.success("sign out successfully");
            }}
            className="btn btn-accent"
          >
            Log Out
          </button>
        ) : (
          <Link to="/login" className="btn btn-accent">
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
