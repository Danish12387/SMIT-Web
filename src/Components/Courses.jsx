import React from 'react'
import useScrollReveal from '../ScrollReveal/useScrollReveal'

function Courses() {

    const Courses = [
        {
            image: "/Courses.png",
            title: "Web Development"
        },
        {
            image: "/Courses.png",
            title: "Cyber Security"
        },
        {
            image: "/Courses.png",
            title: "Graphic Designing"
        },
        {
            image: "/Courses.png",
            title: "Java Programming"
        },
        {
            image: "/Courses.png",
            title: "App Development"
        },
        {
            image: "/Courses.png",
            title: "Python Course"
        },
        {
            image: "/Courses.png",
            title: "Generative AI"
        },
        {
            image: "/Courses.png",
            title: "Chatbot"
        },
    ]

    return (
        <div className='my-20'>
            <h1 className='text-center text-[40px] font-semibold text-blue-600'>Our <span className='text-green-600'>Courses</span></h1>
            <div className='flex flex-wrap gap-10 justify-center my-10'>
                {
                    Courses.map((item, index) => {
                        return (
                            <div key={index} className="card bg-base-100 w-96 shadow-xl hover:scale-105  transition duration-300 ease-out cursor-pointer anim-bottom">
                                <figure>
                                    <img
                                        src={item.image}
                                        alt="Course" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{item.title}</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
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