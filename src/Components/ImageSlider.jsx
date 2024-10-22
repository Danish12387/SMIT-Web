import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { TypeAnimation } from 'react-type-animation';
import 'swiper/swiper-bundle.css';

function ImageSlider() {
  return (
    <div className='relative'>
      <div className='flex justify-center items-center absolute top-0 z-30 bg-[#000000c7] h-full w-full'>
        <div className='w-[70%] '>
          <h1 className='flex lg:flex-row  flex-col  items-center justify-center anim-bottom anim-zoom text-green text-6xl text-center font-semibold'>Welcome to <img className='h-16 mx-2 mb-3' src="/smit-logo.png" alt="logo" /></h1>
          <h2 className='text-center mt-5 text-white text-2xl font-semibold anim-bottom'>One of the largest Tech Institutions to offer <span> <TypeAnimation
            sequence={[
              'Free IT Courses',
              1000,
              'Diverse global community',
              1000,
              'Diverse course offerings',
              1000,
              'Flexible learning options',
              1000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
          /></span></h2>
          <h3 className='text-center mt-5 text-lg none hidden lg:block text-darkText anim-bottom'>The Governor of Sindh, Kamran Khan Tessori, inaugurated the Zaitoon Ashraf IT Park, established near the Baloch Colony Bridge under the administration of the Saylani Welfare International Trust. The IT Park is equipped with state-of-the-art facilities.</h3>
        </div>
      </div>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        // navigation={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className='w-full h-screen max-h-[700px]'
      >
        <SwiperSlide>
          <img
            src="/slider-image-1.jpg"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            alt="Slide 1"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="/slider-image-2.jpg"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            alt="Slide 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/slider-image-3.jpg"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            alt="Slide 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/Slider-img-1.jpg"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            alt="Slide 1"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ImageSlider;
