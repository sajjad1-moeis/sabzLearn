import React from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import {Navigation} from "swiper/modules";

export default function Carousel({children}) {
   return (
      <>
         <Swiper
            slidesPerView={1}
            spaceBetween={25}
            grabCursor
            loop
            navigation={{
               prevEl: ".prev",
               nextEl: ".next",
            }}
            breakpoints={{
               550: {
                  slidesPerView: 2,
               },
               850: {
                  slidesPerView: 3,
               },
               1080: {
                  slidesPerView: 4,
               },
            }}
            modules={[Navigation]}
            className='mySwiper'
         >
            {children}
         </Swiper>
      </>
   );
}
