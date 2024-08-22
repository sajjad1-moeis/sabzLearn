import React from "react";

import {HiArrowUturnLeft} from "react-icons/hi2";
import {HiMiniAcademicCap} from "react-icons/hi2";
import {BsCheck2} from "react-icons/bs";
export default function CommentBox() {
   return (
      <div className='mt-8 bg-gray-100 dark:bg-dark-medium p-5 pb-0 rounded-xl'>
         <div className='flex-center justify-between pb-5 border-b border-white/10'>
            <div className='flex-center gap-3 '>
               <div className='p-[5px] md:block hidden rounded-full border border-amber-500 relative'>
                  <div className='absolute p-[3px] rounded-full bg-amber-500 -top-0.5 -right-0.5'>
                     <HiMiniAcademicCap className='text-sm' />
                  </div>
                  <img
                     src='https://secure.gravatar.com/avatar/aada8b3de05e6110e30ccfb3d540c79b?s=96&d=mm&r=g'
                     className='h-12 rounded-full'
                  />
               </div>
               <div className=''>
                  arsham_khalesi | دانشجو
                  <p className='text-sm mt-3 text-gray-400'>1403/02/08</p>
               </div>
            </div>
            <div className='text-blue-500 p-2 rounded-full border border-blue-500 transition-colors hover:bg-blue-500 hover:text-white cursor-pointer'>
               <HiArrowUturnLeft className='text-xl' />
            </div>
         </div>
         <div className='mt-5 pb-5 md:text-base text-sm'>
            سلام ،خسته نباشید
            <p className='mt-1.5 mb-5'>npm رو حتما باید بگذرونیم یا بدون اون هم میشه؟</p>
            <TemplateComment />
            <TemplateComment />
         </div>
      </div>
   );
}

function TemplateComment({first}) {
   return (
      <div className={`mt-4 bg-gray-100 dark:bg-darker p-5 pb-0 rounded-xl`}>
         <div className='flex-center justify-between pb-5 border-b border-white/10'>
            <div className='flex-center gap-3 '>
               <div className='p-[5px] md:block hidden rounded-full border border-blue-500 relative'>
                  <div className='absolute p-[3px] rounded-full bg-blue-500 -top-0.5 -right-0.5'>
                     <BsCheck2 className='text-sm' />
                  </div>
                  <img
                     src='https://secure.gravatar.com/avatar/50db59beddbfed36a1646dae99ca7b2d?s=96&d=mm&r=g'
                     className='h-12 rounded-full'
                  />
               </div>
               <div className=''>
                  arsham_khalesi | مدرس
                  <p className='text-sm mt-3 text-gray-400'>1403/02/08</p>
               </div>
            </div>
         </div>
         <div className='mt-5 pb-5'>
            سلام ،خسته نباشید
            <p className='mt-1.5'>npm رو حتما باید بگذرونیم یا بدون اون هم میشه؟</p>
         </div>
      </div>
   );
}
