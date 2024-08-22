import React from "react";
import {HiBookOpen} from "react-icons/hi2";
import {CiCalendar} from "react-icons/ci";
import {Link} from "react-router-dom";
export default function SuggestedArticle() {
   return (
      <div className='mt-8 bg-white dark:bg-darker rounded-xl p-5 dark:text-white '>
         <div className='flex items-center gap-3  relative'>
            <span className='absolute -right-[26px] bg-amber-500 w-[6px] h-full rounded-tr-sm rounded-br-sm'></span>
            <HiBookOpen className='text-amber-500 text-4xl' />
            <p className='text-2xl danaMediumBold'>پیشنهاد مطالعه</p>
         </div>

         <div className='mt-5 grid grid-cols-1 md:grid-cols-2 gap-5'>
            <ItemBox />
            <ItemBox />
            <ItemBox />
            <ItemBox />
         </div>
      </div>
   );
}

function ItemBox() {
   return (
      <Link to='/article/3'>
         <div className='flex bg-gray-100 dark:bg-dark-medium p-4 rounded-xl items-center gap-3'>
            <img className='h-20 rounded-xl' src='https://sabzlearn.ir/wp-content/uploads/2021/01/vue.webp' alt='' />
            <div className=''>
               <p className='text-lg'>vue js چیست ؟</p>
               <p className='mt-2 flex items-center-center gap-1 dark:text-gray-400'>
                  <CiCalendar className='text-lg' />
                  <p className='text-sm mt-0.5'>1402/06/12</p>
               </p>
            </div>
         </div>
      </Link>
   );
}
