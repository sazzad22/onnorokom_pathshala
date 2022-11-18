import React from "react";
import { Link } from "react-router-dom";
import auth from "../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import Loading from "./LoadingSpinner";

const Navbar = () => {
  // Authenticate User
  const [user,loading] = useAuthState(auth);
  if (loading) {
    return <Loading></Loading>
  }

  const handleSignOut = () => {
    signOut(auth);
    // localStorage.removeItem('accessToken');
  };

  return (
    <div class="navbar fixed z-50 glass hover:bg-blue-400 transition ease-in delay-150">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
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
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {/* ******
            (Mobile)Nav Menues
            ***** */}
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <a>Videos</a>
            </li>

            <li>
              <Link to={"/about"}>About</Link>
            </li>

            {
              user &&
              <li>
              <Link to={"/dashboard"}>Dashboard</Link>
                </li> 
            }

          </ul>
        </div>

        <Link class="btn btn-ghost normal-case text-4xl" to={"/"}>
          Onnorokom Pathshala
        </Link>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
          {/* ******
            Nav Menues
            ***** */}
          <li>
            <Link className="font-semibold shadow" to={"/"}>Home</Link>
          </li>

          <li>
            <Link className="font-semibold shadow" to={"/about"}>About</Link>
          </li>

          {
              user &&
              <li>
              <Link className="font-semibold shadow" to={"/dashboard"}>Dashboard</Link>
                </li> 
            }
        </ul>
      </div>
      <div class="navbar-end">
        <>
          {
            user && <p className="font-semibold py-1 btn bg-transparent border-0 text-gray-700 hover:bg-transparent hover:underline">{ user.displayName }</p>
          }
        </>
        <>
          {user ? (
            <button className="btn btn-ghost" onClick={handleSignOut}>
              Sign Out
            </button>
          ) : (
            <Link className="btn btn-secondary" to={"/login"}>
              Login
            </Link>
          )}
        </>
      </div>
    </div>
  );
};

export default Navbar;
