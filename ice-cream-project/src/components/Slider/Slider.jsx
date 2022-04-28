import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import styles from "./Slider.module.css"

const Slider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={styles.banner}
      >
        <SwiperSlide><img src="/image/home/banner/banner-order.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/image/home/banner/banner-promotion.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider 