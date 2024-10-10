import React, { useState } from 'react';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Courses() {
    const { courses } = useSelector(state => state.courses);
    const [expandedCards, setExpandedCards] = useState({});

    const toggleDescription = (id) => {
        setExpandedCards((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    return (
        <div className='my-20'>
            <h1 className='text-center text-[40px] font-semibold text-blue-600 anim-zoom'>Our <span className='text-green'>Courses</span></h1>
            <div className='flex flex-wrap gap-10 justify-center my-10'>
                {
                    courses?.map((item, index) => {
                        const isExpanded = expandedCards[item.id];

                        return (
                            <div key={index} className='hover:scale-105 transition duration-1000 delay-200'>
                                <div key={index} className={`card p-5 bg-base-100 sm:w-96 w-[90%] min-w-72 mx-auto shadow-xl cursor-default anim-bottom h-[390px]`}>
                                    <figure>
                                        <img
                                            src="/Courses.png"
                                            alt="Course" />
                                    </figure>
                                    <div className="card-body p-4">
                                        <h2 className="card-title">{item.title}</h2>
                                        <div className='relative'>
                                            <p className={`text-justify h-fit min-h-[72px] ${!isExpanded ? 'line-clamp-3' : 'text-sm mb-6'}`}>
                                                {item.description}
                                            </p>
                                            {
                                                item?.description?.length > 100 && (
                                                    <button
                                                        onClick={() => toggleDescription(item.id)}
                                                        className={`text-blue-500 w-24 absolute right-0 bg-white dark:bg-[#1D232A] bottom-0 hover:underline`}>
                                                        {isExpanded ? 'See Less' : '... See More'}
                                                    </button>
                                                )
                                            }
                                        </div>
                                    </div>
                                    <Link to={`/apply/${item.id}`} className="btn btn-active bg-green text-white hover:bg-hoverGreen font-light text-[15px] p-0 shadow-lg">
                                        <button className='flex items-center justify-between gap-2'>See More <FaArrowUpRightFromSquare /></button>
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Courses;