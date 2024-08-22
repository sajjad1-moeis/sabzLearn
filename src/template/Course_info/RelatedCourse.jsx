import React from "react";
import {FaCircleArrowLeft} from "react-icons/fa6";
import {HiSparkles} from "react-icons/hi2";
import {Link} from "react-router-dom";
export default function RelatedCourse() {
   return (
      <div className='p-5 mt-8 rounded-xl dark:text-white dark:bg-darker bg-white md:block hidden'>
         <div className='text-amber-500 flex items-center gap-3 my-2  relative '>
            <span className='absolute -right-[26px] bg-amber-500 w-[6px] h-full rounded-tr-sm rounded-br-sm'></span>
            <HiSparkles className='text-4xl' />
            <p className='text-2xl danaMediumBold dark:text-white'>دوره های مرتبط</p>
         </div>
         <div className='mt-8'>
            <RelatedCourseBox />
            <RelatedCourseBox />
            <RelatedCourseBox />
            <RelatedCourseBox />
         </div>
      </div>
   );
}

function RelatedCourseBox() {
   return (
      <Link>
         <div className='my-5 rounded-lg pe-4 accordParent bg-gray-100 dark:bg-dark-medium  overflow-hidden p-2.5 flex justify-between'>
            <div className='flex gap-5 items-center'>
               <img className='h-12 rounded' src='https://sabzlearn.ir/wp-content/uploads/2023/12/ezgif.com-jpg-to-webp-converted-28-1.webp' alt='' />
               <p>آموزش تخصصی Redux مقدماتی تا پیشرفته</p>
            </div>
            <div className='flex items-center gap-2 text-blue-500'>
               <p className='mt-1'>مشاهده</p>
               <p>
                  <FaCircleArrowLeft />
               </p>
            </div>
         </div>
      </Link>
   );
}
