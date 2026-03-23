import React from "react";

import { FaGithub } from "react-icons/fa";
import imageLogo from "../assets/logo.png";
import { NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "active text-primary font-bold mr-10"
            : "text-base-content mr-10"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/allApp"
        className={({ isActive }) =>
          isActive
            ? "active text-primary font-bold mr-10"
            : "text-base-content mr-10"
        }
      >
        Apps
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "active text-primary font-bold mr-10"
            : "text-base-content mr-10"
        }
        to="/installation"
      >
        Installation
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-white shadow-sm ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img className="size-6" src={imageLogo}></img>
          <span className="text-[#632ee3]">HERO-IO</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end flex">
        <NavLink to="https://github.com/maqsuda?tab=repositories">
          <button className="flex items-center gap-2 py-2 px-5 rounded-md bg-linear-to-r from-[#632ee3] to-[#9f62f2]  text-white pmt-5">
            <span className="bg-[#9f62f2]">
              <FaGithub />
            </span>{" "}
            Contribution
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
