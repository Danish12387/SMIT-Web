import React from 'react';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Courses() {
    const { courses } = useSelector(state => state.courses);

    return (
        <div className='my-20'>
            <h1 className='text-center text-[40px] font-semibold text-blue-600 anim-zoom'>Our <span className='text-green'>Courses</span></h1>
            <div className='flex flex-wrap gap-10 justify-center my-10'>
                {
                    courses?.map((item, index) => {
                        return (
                            <div className='hover:scale-105 transition duration-1000 delay-200'>
                                <div key={index} className="card p-5 bg-base-100 sm:w-96 w-[90%] min-w-72 mx-auto shadow-xl cursor-default anim-bottom h-96">
                                    <figure>
                                        <img
                                            src="/Courses.png"
                                            alt="Course" />
                                    </figure>
                                    <div className="card-body p-4">
                                        <h2 className="card-title">{item.title}</h2>
                                        <p>{item.description}</p>
                                        <Link className='flex justify-between items-center w-24 cursor-pointer' to={`/apply/${item.id}`}>See More <FaArrowUpRightFromSquare /></Link>
                                    </div>
                                    <Link to="https://forms.saylaniwelfare.com/en" target='_blank' className="btn btn-active bg-blue-700 text-white hover:bg-blue-600 p-0">
                                        <button>Apply Now</button>
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