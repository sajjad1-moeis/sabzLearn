import React from "react";
import {HiAcademicCap} from "react-icons/hi2";

import {CourseMeetingBox} from "../../components/CourseMeetingBox";
export default function SesionCourse() {
   return (
      <div className='p-5 mt-8 rounded-xl dark:text-white dark:bg-darker bg-white'>
         <div className='text-blue-500 flex items-center gap-3 my-2  relative '>
            <span className='absolute -right-[26px] bg-blue-500 w-[6px] h-full rounded-tr-sm rounded-br-sm'></span>
            <HiAcademicCap className='text-4xl' />
            <p className='text-2xl danaMediumBold dark:text-white'>سرفصل ها</p>
         </div>
         <div className='mt-8'>
            <CourseMeetingBox />
            <CourseMeetingBox />
            <CourseMeetingBox />
         </div>
      </div>
   );
}
