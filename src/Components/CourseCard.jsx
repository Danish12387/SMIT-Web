import axios from 'axios';
import React from 'react'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const CourseCard = ({ item, index, expandedCards, toggleDescription }) => {


  function truncateParagraph(paragraph) {
    const words = paragraph.split(' ');
    const truncated = words.slice(0, 15).join(' ');
    return truncated + (words.length > 15 ? '...' : '');
  }
  return (
    <div key={index} className='hover:scale-105  transition duration-1000 delay-200'>
      {/* <Link to={`/apply/${item.id}`}> */}
      <div key={index} className={`card p-5 dark:bg-gray-50 bg-[#1D232A] cursor-pointer sm:w-96 w-[90%] min-w-72 mx-auto shadow-xl  anim-bottom h-[390px]`}>
        <figure>
          <img
            src="/Courses.png"
            alt="Course" />
        </figure>
        <div className="card-body p-4">
          <div className="flex justify-between items-center">
            <h2 className="card-title">{item.title}</h2>
            <div className="badge badge-outline border-green text-blue-600  text-[10px] self-start sm:self-auto">
              {item.category}
            </div>
          </div>
          <div className='relative'>
            <p className={`h-fit min-h-[72px]  text-md text-darkText dark:text-lightText`}>
              {truncateParagraph(item.description)}
            </p>
          </div>
        </div>
        <Link to={`/apply/${item.id}`} className="btn btn-active bg-green text-white hover:bg-hoverGreen font-light text-[15px] p-0 shadow-lg border-none">
          <button className='flex items-center justify-between gap-2'>See More <FaArrowUpRightFromSquare /></button>
        </Link>
      </div>
      {/* </Link> */}
    </div>
  )
}

export default CourseCard