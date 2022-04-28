import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Autoplay, Pagination } from "swiper";

const pictures = [
    {img:"/image/home/footer-slider/image-21.jpg"},
    {img: "/image/home//footer-slider/image-22.jpg"},
    {img: "/image/home//footer-slider/image-23.jpg"},
    {img: "/image/home//footer-slider/image-24.jpg"},
    {img: "/image/home//footer-slider/image-25.jpg"},
    {img: "/image/home//footer-slider/image-26.jpg"},
    {img: "/image/home//footer-slider/image-27.jpg"}
]

const FooterSlider = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {pictures.map(p => (<SwiperSlide><img src={p.img} alt="" /></SwiperSlide>))}
      </Swiper>
      
    </div>
  );
}

export default FooterSlider;