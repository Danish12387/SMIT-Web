import React from "react";
import { Link } from "react-router-dom";

const About = () => {

  return (
    <div className="bg-gray-100 my-6">
      <section className="flex flex-col md:flex-row items-center justify-between bg-white p-16 rounded-lg md:space-x-8">
        <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0 space-y-4">
          <h1 className="text-4xl font-bold text-blue-700">About <span className="text-green-600">Saylani</span></h1>
          <p className="text-gray-700 text-lg">
            Saylani Welfare is dedicated to serving humanity, with a mission to break the cycle of poverty through education, healthcare, and social welfare.
          </p>
          <Link to="/about" className="btn btn-active bg-blue-700 text-white hover:bg-blue-600 hover:scale-105 transition">
            <button>Read More</button>
          </Link>
        </div>

        <div className="md:w-[50%]">
          <img
            src="/About.jpeg"
            alt="Saylani Welfare"
            className="w-3/4 h-auto rounded-lg shadow-lg mx-auto"
          />
        </div>
      </section>
    </div>
  );
};

export default About;
