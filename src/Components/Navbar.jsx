import React, { useState } from "react";
import ShiftingDropDown from "./Dropdown";
import { Link } from "react-router-dom";

const Navbar = () => {
  // State to track the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="navbar bg-base-100 sticky top-0 z-50 shadow-md px-6 md:px-10 h-16 md:h-20">
        {/* Navbar Start */}
        <Link to="/" className="navbar-start">
          <img
            className="h-10 md:h-12 cursor-pointer"
            src="/smit-logo.png"
            alt="SMIT-logo"
          />
        </Link>

        {/* Mobile Menu Button */}
        <div className="lg:hidden navbar-end">
          <button className="btn btn-square btn-ghost" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Navbar Center */}
        <div className={`navbar-center lg:flex hidden lg:space-x-2`}>
          <Link
            to="/"
            className="block md:inline-block rounded-full hover:bg-blue-600 py-1 px-3 md:px-4 transition duration-300 hover:text-white text-black"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block md:inline-block rounded-full hover:bg-blue-600 py-1 px-3 md:px-4 transition duration-300 hover:text-white text-black"
          >
            About
          </Link>
          <Link
            to="/campuses"
            className="block md:inline-block rounded-full hover:bg-blue-600 py-1 px-3 md:px-4 transition duration-300 hover:text-white text-black"
          >
            Campuses
          </Link>
          <ShiftingDropDown />
          <Link
            to="#contact"
            className="block md:inline-block rounded-full hover:bg-blue-600 py-1 px-3 md:px-4 transition duration-300 hover:text-white text-black"
          >
            Contact
          </Link>
        </div>

        {/* Navbar End */}
        <div className="navbar-end hidden lg:flex">
          <Link
            to="#"
            className="btn btn-active bg-green-600 text-white hover:bg-green-700 hover:scale-105 transition text-[12px] md:text-[13px]"
          >
            Apply Now
          </Link>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden flex flex-col items-center space-y-2 mt-4 p-4">
          <Link
            to="/"
            className="rounded-full hover:bg-blue-600 py-2 w-full text-center transition duration-300 hover:text-white text-black text-sm"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="rounded-full hover:bg-blue-600 py-2 w-full text-center transition duration-300 hover:text-white text-black text-sm"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="/campuses"
            className="rounded-full hover:bg-blue-600 py-2 w-full text-center transition duration-300 hover:text-white text-black text-sm"
            onClick={toggleMenu}
          >
            Campuses
          </Link>
          <ShiftingDropDown />
          <Link
            to="#"
            className="rounded-full hover:bg-blue-600 py-2 w-full text-center transition duration-300 hover:text-white text-black text-sm"
            onClick={toggleMenu}
          >
            Contact
          </Link>
          <Link
            to="#contact"
            className="btn btn-active bg-green-600 text-white hover:bg-green-700 hover:scale-105 transition text-[12px] md:text-[13px]"
            onClick={toggleMenu}
          >
            Apply Now
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
