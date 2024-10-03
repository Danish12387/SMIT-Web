import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Teachers = () => {
    var settings = {
        className: "center",
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        // centerPadding: "60px",
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const CourseTeachers = [
        {
            image: "/Instructors1.jpeg",
            title: "Sir Kamran",
            description:"Sr. Web Developer at Folio3"
        },
        {
            image: "/Instructors2.jpeg",
            title: "Sir Bilal",
            description:"Sr. Web Developer at Folio3"

        },
        {
            image: "/Instructors3.jpeg",
            title: "Sir Ghous",
            description:"Sr. Web Developer at Folio3"

        },
    ]

    return (
        <div className="my-20 container mx-auto">
            <h1 className='text-center text-[40px] font-semibold text-blue-600 anim-zoom'>Our <span className='text-green-600'>Teachers</span></h1>

            <div className="my-20 w-[90%] sm:w-full mx-auto px-5 sm:px-10">
                <Slider {...settings}>
                    {
                        CourseTeachers.map((item, index) => {
                            return (
                                <div key={index} className="flex justify-center" data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="1500" data-aos-once="true">
                                    <div className="card bg-base-100 shadow-xl border cursor-pointer mx-1 sm:mx-2 md:mx-5 h-96">
                                        <figure className="h-[70%]">
                                            <img
                                                src={item.image}
                                                alt="Course" />
                                        </figure>
                                        <div className="card-body">
                                            <h2 className="card-title">{item.title}</h2>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, iste.</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </Slider>
            </div>
        </div>
    );
}

export default Teachers;