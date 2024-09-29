import React from "react";
import ShiftingDropDown from "./Dropdown";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <>
      <div className="navbar bg-base-100 sticky top-0 z-50 shadow-md px-10 h-20">
        <Link to="/" className="navbar-start">
          <img className="h-12 cursor-pointer" src="/smit-logo.png" alt="SMIT-logo" />
        </Link>
        <div className="navbar-center hidden lg:flex">
          <Link to="/" className="rounded-full hover:bg-blue-600 py-1 px-4 transition duration-300 hover:text-white mx-2 text-md text-black">Home</Link>
          <Link to="/about" className="rounded-full hover:bg-blue-600 py-1 px-4 transition duration-300 hover:text-white mx-2 text-md text-black">About</Link>
          <ShiftingDropDown />
          <Link to="#" className="rounded-full hover:bg-blue-600 py-1 px-4 transition duration-300 hover:text-white mx-2 text-md text-black">Contact</Link>
        </div>
        <div className="navbar-end">
          <Link to="#" className="btn btn-active bg-green-600 text-white hover:bg-green-700 hover:scale-105 transition">
            <button className="text-[13px]">Apply Now</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar;