import React, { useState } from "react";
import ShiftingDropDown from "./Dropdown";
import { Link } from "react-router-dom";
import ThemeController from "./ThemeController";
import { Button, Collapse } from "@material-tailwind/react";
import { X } from 'lucide-react';

const NavbarBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="navbar bg-base-100 sticky top-0 z-50 shadow-md px-6 md:px-10 h-16 md:h-20">
        <div className="navbar-start">
          <Link to="/">
            <img
              className="h-10 md:h-12 cursor-pointer"
              src="/smit-logo.png"
              alt="SMIT-logo"
            />
          </Link>
        </div>
        {/*
        <div className="lg:hidden navbar-end" onClick={toggleMenu}>
          <label className="btn btn-circle swap swap-rotate">
            <input type="checkbox" />

            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512">
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>

            <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512">
              <polygon
                points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
        </div> */}

        <div className="lg:hidden navbar-end">
          <button className="btn btn-square" onClick={toggleMenu}>
            {
              isOpen ?
                <X className="h-6 w-6" /> :

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
            }
          </button>
        </div>

        <div className={`navbar-center lg:flex hidden lg:space-x-2`}>
          <Link
            to="/"
            className="block md:inline-block rounded-full hover:bg-blue-600 py-1 px-3 md:px-4 transition duration-300 hover:text-white"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block md:inline-block rounded-full hover:bg-blue-600 py-1 px-3 md:px-4 transition duration-300 hover:text-white"
          >
            About
          </Link>
          {/* <Link
            to="/campuses"
            className="block md:inline-block rounded-full hover:bg-blue-600 py-1 px-3 md:px-4 transition duration-300 hover:text-white"
          >
            Campuses
          </Link> */}
          <ShiftingDropDown />
          <a
            href="/#contact"
            className="block md:inline-block rounded-full hover:bg-blue-600 py-1 px-3 md:px-4 transition duration-300 hover:text-white"
          >
            Contact
          </a>
        </div>

        <div className="navbar-end hidden lg:flex">
          <Link
            to="https://forms.saylaniwelfare.com/en" target="_blank"
          >
            <Button className="bg-[#8dc63f] text-white hover:bg-[#80b92f] hover:scale-105 transition text-[12px] md:text-[13px]">
              Apply Now
            </Button>
          </Link>
        </div>
        <ThemeController />
      </div>
      {/* {
        isOpen && ( */}
      <Collapse open={isOpen} className={`text-center fixed top-0 w-full h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 z-30 bg-white ${isOpen && "overflow-visible"}`}>
        <div className="w-full bg-blue-600 flex justify-end">
          <button className="btn btn-square bg-black" onClick={toggleMenu}>
            <X />
          </button>
        </div>
        <div className="lg:hidden flex flex-col items-center justify-center space-y-2 mt-4 p-4">
          <Link
            to="/"
            className="rounded-full hover:bg-blue-600 py-2 w-full text-center transition duration-300 hover:text-white text-sm"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="rounded-full hover:bg-blue-600 py-2 w-full text-center transition duration-300 hover:text-white text-sm"
            onClick={toggleMenu}
          >
            About
          </Link>
          {/* <Link
            to="/campuses"
            className="rounded-full hover:bg-blue-600 py-2 w-full text-center transition duration-300 hover:text-white text-sm"
            onClick={toggleMenu}
          >
            Campuses
          </Link> */}
          <ShiftingDropDown />
          <a
            href="/#contact"
            className="rounded-full hover:bg-blue-600 py-2 w-full text-center transition duration-300 hover:text-white text-sm"
            onClick={toggleMenu}
          >
            Contact
          </a>
          <Link
            to="https://forms.saylaniwelfare.com/en" target="_blank"
            className="btn btn-active bg-green text-white hover:bg-hoverGreen hover:scale-105 transition text-[12px] md:text-[13px]"
            onClick={toggleMenu}
          >
            Apply Now
          </Link>
        </div>
      </Collapse>
    </>
  );
};

export default NavbarBar;
