import React, {useState} from "react";
import ClipboardBox from "../../components/ClipboardBox";
import AccordianCustom from "../../components/AccordianCustom/AccordianCustom";
import {BsShare} from "react-icons/bs";
import {HiOutlineAcademicCap} from "react-icons/hi2";
import {Link} from "react-router-dom";
export default function RelatedArticle() {
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
            <div className=' py-5 border-b border-white/10 dark:text-white'>
               <Link to='/curse-info/js' className='flex gap-3'>
                  <img
                     className='h-14'
                     src='https://sabzlearn.ir/wp-content/uploads/2023/12/HTML-852x479-2-1-1.webp'
                     alt=''
                  />
                  <p className='text-sm leading-7'>آموزش HTML رایگان مقدماتی تا پیشرفته</p>{" "}
               </Link>
            </div>
            <div className=' py-5 border-b border-white/10 dark:text-white'>
               <Link to='/curse-info/js' className='flex gap-3'>
                  <img
                     className='h-14'
                     src='https://sabzlearn.ir/wp-content/uploads/2023/12/HTML-852x479-2-1-1.webp'
                     alt=''
                  />
                  <p className='text-sm leading-7'>آموزش HTML رایگان مقدماتی تا پیشرفته</p>{" "}
               </Link>
            </div>
            <div className=' py-5 dark:text-white'>
               <Link to='/curse-info/js' className='flex gap-3'>
                  <img
                     className='h-14'
                     src='https://sabzlearn.ir/wp-content/uploads/2023/12/HTML-852x479-2-1-1.webp'
                     alt=''
                  />
                  <p className='text-sm leading-7'>آموزش HTML رایگان مقدماتی تا پیشرفته</p>{" "}
               </Link>
            </div>
         </AccordianCustom>
      </div>
   );
}
