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
        centerPadding: "60px",
    };

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
        <div className="my-20 w-full mx-auto px-10">
            <Slider {...settings}>
                {
                    Courses.map((item, index) => {
                        return (
                            <div key={index} className="flex justify-center"> {/* Added flex & justify-center */}
                                <div className="card bg-base-100 shadow-xl border cursor-pointer w-96"> {/* Changed max-w-96 to w-96 */}
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
                            </div>
                        );
                    })
                }
            </Slider>
        </div>

    );
}

export default Teachers;