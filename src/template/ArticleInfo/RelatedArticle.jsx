import React, {useEffect, useState} from "react";
import ClipboardBox from "../../components/ClipboardBox";
import AccordianCustom from "../../components/AccordianCustom/AccordianCustom";
import {BsShare} from "react-icons/bs";
import {HiOutlineAcademicCap} from "react-icons/hi2";
import {Link} from "react-router-dom";
import getDataSuapse from "../../../utils/getDataSuapse";
export default function RelatedArticle() {
   let [courseData, fetchCourses] = getDataSuapse();

   useEffect(() => {
      fetchCourses("courses");
   }, []);

   return (
      <div>
         <AccordianCustom
            title={
               <div className='flex gap-2 items-center dark:text-white'>
                  <BsShare className='text-xl' />
                  اشتراک گذاری مطلب
               </div>
            }
         >
            <ClipboardBox />
         </AccordianCustom>
         <AccordianCustom
            title={
               <div className='flex gap-2 items-center dark:text-white text-lg'>
                  <HiOutlineAcademicCap className='text-2xl' /> دوره های مرتبط
               </div>
            }
         >
            {courseData?.slice(0, 4).map((item) => (
               <div className=' py-5 border-b border-white/10 dark:text-white'>
                  <Link to={`/course/${item.id}`} className='flex gap-3'>
                     <img className='h-14' src={item.cover} alt='' />
                     <p className='text-sm leading-7 line-clamp-1'>{item.title}</p>{" "}
                  </Link>
               </div>
            ))}
         </AccordianCustom>
      </div>
   );
}
