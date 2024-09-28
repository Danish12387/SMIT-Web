import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

function ImageSlider() {
  return (
    <div>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className='w-full h-screen max-h-[700px]'
      >
        <SwiperSlide>
          <img
            src="/Slider-img-1.jpg"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            alt="Slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/Slider-img-2.jpg"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            alt="Slide 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/Slider-img-3.jpg"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            alt="Slide 3"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ImageSlider;
