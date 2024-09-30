import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const ChairmanAbout = () => {

    return (
        <div className="bg-gray-100 my-6">
            <section className="flex md:flex-row flex-col-reverse items-center justify-between bg-white p-16 rounded-lg md:space-x-8">
                <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0 space-y-4">
                    <h1 className="text-4xl font-bold text-blue-700 anim-left">Muhammad Bashir Farooq</h1>
                    <h3 className="text-green-600 font-bold text-2xl anim-left">Chairman <span className="text-green-600">SMIT</span></h3>
                    <p className="text-gray-700 text-[16px] anim-left md:text-lg anim-left">
                        Saylani Mass IT Training (SMIT) is a flagship program launched by the Saylani Welfare International Trust, aimed at equipping individuals with cutting-edge IT skills to meet the growing demands of the digital economy.
                    </p>
                    <Link to="/about" className="btn btn-active bg-blue-700 text-white hover:bg-blue-600 hover:scale-105 transition anim-left">
                        <button>Read More </button><FiChevronRight className="text-xl" />
                    </Link>
                </div>

                <div className="md:w-[50%] my-5">
                    <img
                        src="/Chairman.jpg"
                        alt="Saylani Welfare"
                        className="md:w-2/4 h-auto mx-auto w-[100%]"
                    />
                </div>
            </section>
        </div>
    );
};

export default ChairmanAbout;
