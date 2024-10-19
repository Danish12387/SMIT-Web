import React, { useState } from 'react';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CourseCard from './CourseCard';


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
                            <CourseCard item={item} index={index} expandedCards={expandedCards} toggleDescription={toggleDescription}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Courses;