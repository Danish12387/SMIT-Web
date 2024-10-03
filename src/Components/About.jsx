import React from "react";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

const About = () => {

  return (
    <div className="my-10">
      <section className="flex md:flex-row flex-col-reverse items-center justify-between p-16 rounded-lg md:space-x-8">
        <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0 space-y-4">
          <h1 className="text-4xl font-bold text-blue-700 anim-left">About <span className="text-green-600">Saylani</span></h1>
          <p className="text-gray-700 text-[16px] anim-left md:text-lg">
            Saylani Welfare is dedicated to serving humanity, with a mission to break the cycle of poverty through education, healthcare, and social welfare.
          </p>
          <Link to="/about" className="btn btn-active bg-blue-700 text-white hover:bg-blue-600 hover:scale-105 transition anim-left">
            <button>Read More </button><FiChevronRight className="text-xl" />
          </Link>
        </div>

        <div className="md:w-[50%] my-5 anim-zoom">
          <img
            src="/smit-logo-2.png"
            alt="Saylani Welfare"
            className="md:w-2/4 h-auto mx-auto w-[100%]"
          />
        </div>
      </section>
    </div>
  );
};

export default About;
