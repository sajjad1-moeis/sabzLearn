import React from "react";
import {Link} from "react-router-dom";
import {HiOutlineUser} from "react-icons/hi2";
import {GoCalendar} from "react-icons/go";
import {IoArrowBackCircle} from "react-icons/io5";
import "./ArticleBox.css";
export default function ArticleBox(props) {
   return (
      <div class='dark:text-white flex flex-col   bg-white dark:bg-darker border border-neutral-100 dark:border-none overflow-hidden rounded-2xl'>
         {/*  Blog Banner */}

         <div class=' relative h-[182px] overflow-hidden  '>
            <div className='dark:block hidden articleDark'></div>
            <div className='dark:hidden articleLight'></div>
            <Link to={`/article/${props.id}`}>
               <img src={props.cover} class='block w-full h-full object-cover' alt='UML چیست؟' loading='lazy' />
            </Link>
         </div>

         {/*  Blog Title & Description */}

         <div class='flex-grow px-5 py-3'>
            {/*  Blog Title */}

            <h3 class='font-danaDemiBold line-clamp-2 mb-3'>
               <Link to={`/article/${props.id}`}>{props.title}</Link>
            </h3>

            {/*  Blog Description */}
            <p class='text-sm line-clamp-4 text-gray-900/70 dark:text-white/70'>{props.desc} </p>
         </div>

         {/*  Blog Footer */}

         <div class='px-5 pb-5'>
            {/*  Blog Author & Date */}

            <div class='flex justify-between items-center text-slate-500 dark:text-white/70 text-sm pb-4 border-b border-b-neutral-200/70 dark:border-b-white/10'>
               <div class='flex items-center gap-x-0.5'>
                  <HiOutlineUser />
                  <span>{props.created}</span>
               </div>
               <div class='flex items-center gap-x-0.5'>
                  <svg class='w-5 h-5'>
                     <use href='#calendar'></use>
                  </svg>
                  <span>1403/05/27</span>
               </div>
            </div>

            {/*  Blog Link Address */}

            <Link to={`/article/${props.id}`}>
               <div class='flex justify-center gap-1 items-center mt-4'>
                  مطالعه مقاله
                  <IoArrowBackCircle className='text-xl' />
               </div>
            </Link>
         </div>
      </div>
   );
}
