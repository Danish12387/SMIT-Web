import React, { useEffect, useState } from "react";
import {
    FiArrowRight,
    FiBarChart2,
    FiChevronDown,
    FiHome,
    FiPieChart,
} from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import useGetAllCourses from "../hooks/useGetAllCourses";

const ShiftingDropDown = () => {
    return (
        <div className="flex z-50 w-full justify-start text-neutral-200 md:justify-center">
            <Tabs />
        </div>
    );
};

export default ShiftingDropDown;

const Tabs = () => {
    const [selected, setSelected] = useState(null);
    const [dir, setDir] = useState(null);
    const [isTrue, setIsTrue] = useState(false);

    const handleSetSelected = (val) => {
        if (typeof selected === "number" && typeof val === "number") {
            setDir(selected > val ? "r" : "l");
        } else if (val === null) {
            setDir(null);
        }

        setSelected(val);
    };

    return (
        <div
            onMouseLeave={() => handleSetSelected(null)}
            className="relative flex h-fit gap-2 lg:flex-row text-sm lg:text-[16px] w-full items-center flex-col"
        >
            {TABS.map((t) => {
                return (
                    <Tab
                        key={t.id}
                        selected={selected}
                        handleSetSelected={handleSetSelected}
                        tab={t.id}
                    >
                        {t.title}
                    </Tab>
                );
            })}

            <AnimatePresence>
                {selected && <Content dir={dir} selected={selected} />}
            </AnimatePresence>
        </div>
    );
};

const Tab = ({ children, tab, handleSetSelected, selected }) => {
    return (
        <button
            id={`shift-tab-${tab}`}
            onMouseEnter={() => handleSetSelected(tab)}
            onClick={() => handleSetSelected(tab)}
            className={`flex items-center dark:text-darkText text-lightText  gap-1 rounded-full  py-1.5 w-full justify-center md:px-3 text-md transition-colors ${selected === tab
                ? " bg-blue-600 text-white"
                : ""
                }`}
        >
            <span>{children}</span>
            <FiChevronDown
                className={`transition-transform ${selected === tab ? "rotate-180" : ""
                    }`}
            />
        </button>
    );
};

const Content = ({ selected, dir }) => {
    return (
        <motion.div
            id="overlay-content"
            initial={{
                opacity: 0,
                y: 8,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            exit={{
                opacity: 0,
                y: 8,
                transition: {
                    delay: .25,
                },
            }}
            className={`absolute ${selected === 1 && 'lg:-right-[200px] top-[calc(100%_+_-200px)] sm:top-[calc(100%_+_-70px)]'} ${selected === 2 && 'lg:-right-[180px] top-[calc(100%_+_-30px)]'} ${selected === 3 && 'lg:left-36 top-[calc(100%_+_0px)]'} ${selected === 4 && 'lg:left-96 top-[calc(100%_+_0px)]'} lg:top-[calc(100%_+_24px)] rounded-lg border border-neutral-200 shadow  p-3 bg-white`}
        >
            <Bridge />
            <Nub selected={selected} />

            {TABS.map((t) => {
                return (
                    <div className="overflow-hidden" key={t.id}>
                        {selected === t.id && (
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
                                }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.25, ease: "easeInOut" }}
                            >
                                <t.Component />
                            </motion.div>
                        )}
                    </div>
                );
            })}
        </motion.div>
    );
};

const Bridge = () => (
    <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />
);

const Nub = ({ selected }) => {
    const [left, setLeft] = useState(0);

    useEffect(() => {
        moveNub();
    }, [selected]);

    const moveNub = () => {
        if (selected) {
            const hoveredTab = document.getElementById(`shift-tab-${selected}`);
            const overlayContent = document.getElementById("overlay-content");

            if (!hoveredTab || !overlayContent) return;

            const tabRect = hoveredTab.getBoundingClientRect();
            const { left: contentLeft } = overlayContent.getBoundingClientRect();

            const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

            setLeft(tabCenter);
        }
    };

    return (
        <motion.span
            style={{
                clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
            }}
            animate={{ left }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-neutral-400 lg:block hidden"
        />
    );
};

const Courses = () => {
    const { courses } = useSelector(state => state.courses);

    return (
        <div>
            <div className="md:w-[600px] sm:w-[400px] w-[340px]">
                <div className="flex gap-4">
                    <div>
                        <h3 className="mb-2 text-[14px] md:text-[16px] font-medium text-blue-600">Technology</h3>
                        {
                            courses?.length > 0 ? (
                                courses?.map((item, index) => {
                                    return (
                                        <Link to={`/apply/${item.id}`} key={index} onClick={() => useGetAllCourses()} className="flex justify-between items-center my-2 text-[13px] md:text-sm text-lightText hover:bg-gray-100 p-2 transition rounded hover:text-green">
                                            {item.title} <FiArrowRight className="hidden lg:block" />
                                        </Link>
                                    )
                                })
                            )
                                : <>No Results</>
                        }
                    </div>
                    <div>
                        <h3 className="mb-2 text-[14px] md:text-[16px] font-medium text-blue-600">Medical</h3>
                        <Link to={`#`} key='' onClick={() => window.reload()} className="flex justify-between items-center my-2 text-[13px] md:text-sm text-lightText hover:bg-gray-100 p-2 transition rounded hover:text-green">
                            Bachelor of Medicine<FiArrowRight className="hidden lg:block" />
                        </Link>
                        <Link to={`#`} key='' onClick={() => window.reload()} className="flex justify-between items-center my-2 text-[13px] md:text-sm text-lightText hover:bg-gray-100 p-2 transition rounded hover:text-green">
                            Bachelor of Dental Surgery<FiArrowRight className="hidden lg:block" />
                        </Link>
                        <Link to={`#`} key='' onClick={() => window.reload()} className="flex justify-between items-center my-2 text-[13px] md:text-sm text-lightText hover:bg-gray-100 p-2 transition rounded hover:text-green">
                            Bachelor of Pharmacy<FiArrowRight className="hidden lg:block" />
                        </Link>
                        <Link to={`#`} key='' onClick={() => window.reload()} className="flex justify-between items-center my-2 text-[13px] md:text-sm text-lightText hover:bg-gray-100 p-2 transition rounded hover:text-green">
                            B.Sc Nursing<FiArrowRight className="hidden lg:block" />
                        </Link>
                        <Link to={`#`} key='' onClick={() => window.reload()} className="flex justify-between items-center my-2 text-[13px] md:text-sm text-lightText hover:bg-gray-100 p-2 transition rounded hover:text-green">
                            BHMS <FiArrowRight className="hidden lg:block" />
                        </Link>
                        <Link to={`#`} key='' onClick={() => window.reload()} className="flex justify-between items-center my-2 text-[13px] md:text-sm text-lightText hover:bg-gray-100 p-2 transition rounded hover:text-green">
                            Doctor of Medicine  <FiArrowRight className="hidden lg:block" />
                        </Link>
                    </div>
                    <div>
                        <h3 className="mb-2 text-[14px] md:text-[16px] font-medium text-blue-600">Repairing</h3>
                        <Link to={`#`} key='' onClick={() => window.reload()} className="flex justify-between items-center my-2 text-[13px] md:text-sm text-lightText hover:bg-gray-100 p-2 transition rounded hover:text-green">
                            Mobile Repairing<FiArrowRight className="hidden lg:block" />
                        </Link>
                        <Link to={`#`} key='' onClick={() => window.reload()} className="flex justify-between items-center my-2 text-[13px] md:text-sm text-lightText hover:bg-gray-100 p-2 transition rounded hover:text-green">
                            Car Repairing<FiArrowRight className="hidden lg:block" />
                        </Link>
                        <Link to={`#`} key='' onClick={() => window.reload()} className="flex justify-between items-center my-2 text-[13px] md:text-sm text-lightText hover:bg-gray-100 p-2 transition rounded hover:text-green">
                            Plane Repairing<FiArrowRight className="hidden lg:block" />
                        </Link>
                    </div>
                </div>
            </div >
        </div >
    );
}

const Campuses = () => {

    const karachiCampuses = [
        { id: 1, name: "Saylani Welfare Head Office" },
        { id: 2, name: "Saylani Mass IT Training Campus" },
        { id: 3, name: "Gulshan-e-Iqbal Campus" },
        { id: 4, name: "North Karachi Campus" },
        { id: 5, name: "Clifton Campus" },
        { id: 6, name: "Korangi Campus" },
    ]

    const lahoreCampuses = [
        { id: 1, name: "Model Town Campus" },
        { id: 2, name: "Saylani Welfare Lahore Campus" },
        { id: 3, name: "Johar Town Campus" },
    ]

    const islamabadCampuses = [
        { id: 1, name: "Saylani Welfare Islamabad Campus" },
        { id: 2, name: "Blue Area Campus" },
    ]

    return (
        <div>
            <div className="lg:w-[900px]">
                <div className="flex justify-between gap-4">
                    <div className="md:block hidden">
                        <div className="my-2 hover:bg-gray-100 p-2 rounded cursor-pointer">
                            <h3 className="mb-2 text-[14px] md:text-[16px] font-medium text-blue-600">IT Park</h3>
                            <h4 className="text-green text-[12px] md:text-[14px] font-medium">Zaitoon Ashraf IT Park</h4>
                        </div>
                        <img src="/IT-Park.png" alt="IT Park" className="w-60 rounded-lg" />
                    </div>
                    <hr className="h-64 m-auto border-l border-t-0 border-gray-200 md:block hidden" />
                    <div>
                        <h3 className="mb-2 text-[14px] md:text-[16px] font-medium text-blue-600">Karachi</h3>
                        {
                            karachiCampuses?.length > 0 ? (
                                karachiCampuses?.map((item, index) => {
                                    return (
                                        <Link to={`/campuses/${item.id}`} key={index} onClick={() => useGetAllCourses()} className="flex justify-between text-left items-center my-2 text-[13px] md:text-sm text-lightText hover:bg-gray-100 p-2 transition rounded hover:text-green">
                                            {item.name} <FiArrowRight className="hidden lg:block" />
                                        </Link>
                                    )
                                })
                            )
                                : <>No Results</>
                        }
                    </div>
                    <div>
                        <h3 className="mb-2 text-[14px] md:text-[16px] font-medium text-blue-600">Lahore</h3>
                        {
                            lahoreCampuses?.length > 0 ? (
                                lahoreCampuses?.map((item, index) => {
                                    return (
                                        <Link to={`/campuses`} key={index} onClick={() => useGetAllCourses()} className="flex justify-between items-center text-left my-2 text-[13px] md:text-sm text-lightText hover:bg-gray-100 p-2 transition rounded hover:text-green">
                                            {item.name} <FiArrowRight className="hidden lg:block" />
                                        </Link>
                                    )
                                })
                            )
                                : <>No Results</>
                        }
                    </div>
                    <div>
                        <h3 className="mb-2 text-[14px] md:text-[16px] font-medium text-blue-600">Islamabad</h3>
                        {
                            islamabadCampuses?.length > 0 ? (
                                islamabadCampuses?.map((item, index) => {
                                    return (
                                        <Link to={`/campuses`} key={index} onClick={() => useGetAllCourses()} className="flex justify-between items-center text-left my-2 text-[13px] md:text-sm text-lightText hover:bg-gray-100 p-2 transition rounded hover:text-green">
                                            {item.name} <FiArrowRight className="hidden lg:block" />
                                        </Link>
                                    )
                                })
                            )
                                : <>No Results</>
                        }
                    </div>
                </div>
                <Link to={`/campuses`} className="flex justify-end items-center"><p className="px-3 py-2 rounded-lg cursor-pointer transition-all hover:bg-gray-100 text-blue-700 flex items-center justify-end">See All <FiArrowRight /></p></Link>
            </div >
        </div >
    );
}

const QuickLinks = () => {
    return (
        <div className="w-[270px]">
            <Link to="https://www.saylaniwelfare.com/en" target="_blank">
                <button className="text-black h-full w-full py-3 transition rounded text-sm hover:bg-gray-100 hover:text-blue-600 my-2">Saylani Website</button>
            </Link>
            <Link to="https://student.saylaniwelfare.com/dashboard" target="_blank">
                <button className="text-black h-full w-full py-3 transition rounded text-sm hover:bg-gray-100 hover:text-blue-600 my-2">Student Portal </button>
            </Link>
        </div >
    );
};
const Stories = () => {
    return (
        <div className="w-[270px]">
            <Link to={`/sucess-story/${'sabeeb'}`} >
                <button className="text-lightText h-full w-full py-3 transition rounded text-sm hover:bg-gray-100 hover:text-blue-600 my-2">Sucess Stories</button>
            </Link>

        </div >
    );
};

const TABS = [
    {
        title: "Campuses",
        Component: Campuses,
    },
    {
        title: "Courses",
        Component: Courses,
    },
    {
        title: "Stories",
        Component: Stories,
    }
].map((n, idx) => ({ ...n, id: idx + 1 }));