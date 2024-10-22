import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const ChairmanAbout = () => {

    return (
        <div className="my-6">
            <section className="flex items-center justify-between my-14">
                <div className="flex md:flex-row flex-col-reverse items-center justify-around rounded-lg w-[90%] mx-auto p-2">
                    <div className="md:w-[60%] text-center md:text-left mb-6 md:mb-0 space-y-4">
                        <h3 className="text-green font-bold text-2xl sm:anim-left anim-zoom m-0 p-0">Chairman <span className="text-green">SWIT</span></h3>
                        <h1 className="text-4xl font-bold text-blue-700 sm:anim-left anim-zoom">Muhammad Bashir Farooq</h1>
                        <p className="text-[16px] sm:anim-left anim-zoom md:text-lg">
                            Saylani Mass IT Training (SMIT) is a flagship program launched by the Saylani Welfare International Trust, aimed at equipping individuals with cutting-edge IT skills to meet the growing demands of the digital economy.
                        </p>
                        <Link to="/about" className="btn btn-active bg-blue-700 text-white hover:bg-blue-600 hover:scale-105 transition sm:anim-left anim-zoom">
                            <button>Read More </button><FiChevronRight className="text-xl" />
                        </Link>
                    </div>

                    <div className="md:w-[25%] my-5 anim-zoom">
                        <img
                            src="/Chairman.jpg"
                            alt="Saylani Welfare"
                            className="md:w-full h-auto mx-auto w-[100%] hover:scale-105 transition duration-500 ease-in-out rounded-lg"
                        />
                    </div>
                </div>
            </section>
            <hr className="w-[90%] mx-auto border-gray-200 dark:border-gray-700" />
            <section className="flex items-center justify-between my-14">
                <div className="flex md:flex-row-reverse flex-col-reverse items-center justify-around rounded-lg w-[90%] mx-auto p-4">
                    <div className="md:w-[60%] text-center md:text-left mb-6 md:mb-0 space-y-4">
                        <h3 className="text-green font-bold text-2xl sm:anim-right anim-zoom">Chairman Educational Board <span className="text-green">SWIT</span></h3>
                        <h1 className="text-4xl font-bold text-blue-700 sm:anim-right anim-zoom">Afzal Chamdia</h1>
                        <p className="text-[16px] sm:anim-right anim-zoom md:text-lg">
                            Afzal Chamdia leads SMIT's efforts to train individuals in cutting-edge IT skills. His focus is on preparing students for the demands of the modern digital economy
                        </p>
                        <Link to="/about" className="btn btn-active bg-blue-700 text-white hover:bg-blue-600 hover:scale-105 transition sm:anim-right anim-zoom">
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
