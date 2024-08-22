import React, {useRef} from "react";
import SectionHeader from "../../components/common/SectionHeader";
import {SlArrowLeft, SlArrowRight} from "react-icons/sl";
import SkeletonCustom from "../../components/common/Skeleton";
import CourseBox from "../../components/common/CourseBox";
import Carousel from "../../components/Carousel";
import {SwiperSlide} from "swiper/react";
export default function NewCourses({data}) {
   return (
      <div className='mt-40 container relative'>
         <div className='absolute w-[250px] h-[250px] rounded-full opacity-25 -top-40 -left-40 blur-[125px] bg-success'></div>
         <div className='relative'>
            {/* Button And Section Header  */}

            <SectionHeader title='جدیدترین دوره ها' desc='یادگیری و رشد توسعه فردی' bg='bg-green-500'>
               <div className='gap-4 flex text-xl justify-center md:w-max w-full'>
                  <button className='prev p-4 rounded-full border border-success text-success'>
                     <SlArrowRight />
                  </button>
                  <button className='p-4 next rounded-full border border-success text-success'>
                     <SlArrowLeft />
                  </button>
               </div>
            </SectionHeader>

            {/* Map Data  */}

            <div>
               {data?.length > 0 ? (
                  <Carousel>
                     {data.map((item) => (
                        <SwiperSlide className='bg-darker md:min-h-96 lg:max-h-96  rounded-2xl overflow-hidden'>
                           <CourseBox {...item} slider />
                        </SwiperSlide>
                     ))}
                  </Carousel>
               ) : (
                  <SkeletonCustom />
               )}
            </div>
         </div>
      </div>
   );
}
