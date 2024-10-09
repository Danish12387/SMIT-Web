import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const ChairmanAbout = () => {

    return (
        <div className="my-6">
            <section className="flex items-center justify-between my-14">
                <div className="flex md:flex-row flex-col-reverse items-center justify-around rounded-lg w-[90%] mx-auto p-2">
                    <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0 space-y-4">
                        <h3 className="text-green font-bold text-2xl anim-left m-0 p-0">Chairman <span className="text-green">SWIT</span></h3>
                        <h1 className="text-4xl font-bold text-blue-700 anim-left">Muhammad Bashir Farooq</h1>
                        <p className="text-[16px] anim-left md:text-lg">
                            Saylani Mass IT Training (SMIT) is a flagship program launched by the Saylani Welfare International Trust, aimed at equipping individuals with cutting-edge IT skills to meet the growing demands of the digital economy.
                        </p>
                        <Link to="/about" className="btn btn-active bg-blue-700 text-white hover:bg-blue-600 hover:scale-105 transition anim-left">
                            <button>Read More </button><FiChevronRight className="text-xl" />
                        </Link>
                    </div>

                    <div className="md:w-[25%] my-5 anim-zoom bg-green">
                        <img
                            src="/Chairman.jpg"
                            alt="Saylani Welfare"
                            className="md:w-full h-auto mx-auto w-[100%] hover:scale-105 transition duration-500 ease-in-out"
                        />
                    </div>
                </div>
            </section>
            <hr className="w-[90%] mx-auto border-gray-200 dark:border-gray-700" />
            <section className="flex items-center justify-between my-14">
                <div className="flex md:flex-row-reverse flex-col-reverse items-center justify-around rounded-lg w-[90%] mx-auto p-4">
                    <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0 space-y-4">
                        <h3 className="text-green font-bold text-2xl anim-right">Chairman Educational Board <span className="text-green">SWIT</span></h3>
                        <h1 className="text-4xl font-bold text-blue-700 anim-right">Afzal Chamdia</h1>
                        <p className="text-[16px] anim-right md:text-lg">
                            Afzal Chamdia leads SMIT's efforts to train individuals in cutting-edge IT skills. His focus is on preparing students for the demands of the modern digital economy
                        </p>
                        <Link to="/about" className="btn btn-active bg-blue-700 text-white hover:bg-blue-600 hover:scale-105 transition anim-right">
                            <button>Read More </button><FiChevronRight className="text-xl" />
                        </Link>
                    </div>

                    <div className="md:w-[25%] my-5 anim-zoom">
                        <img
                            src="/Afzal.jpg"
                            alt="Saylani Welfare"
                            className="sm:w-full h-auto mx-auto w-[100%] hover:scale-105 transition duration-500 ease-in-out rounded-lg"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ChairmanAbout;
