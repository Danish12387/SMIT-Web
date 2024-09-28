import React from 'react'
import Courses from '../Components/Courses';
import ImageSlider from '../Components/ImageSlider';
import About from '../Components/About';
import ChairmanAbout from '../Components/ChairmanAbout';
import Teachers from '../Components/Teachers';

function Home() {
    return (
        <div className='max-w-screen-2xl mx-auto'>
            <ImageSlider />
            <About />
            <hr className="w-[90%] mx-auto border-gray-300" />
            <Courses />
            <hr className="w-[90%] mx-auto border-gray-300" />
            <ChairmanAbout />
            <hr className="w-[90%] mx-auto border-gray-300" />
            <Teachers />
        </div>
    )
}

export default Home;