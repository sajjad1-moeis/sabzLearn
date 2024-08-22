import React from "react";
import {Link} from "react-router-dom";
import {HiOutlineUser} from "react-icons/hi2";
import {FaStar} from "react-icons/fa";
import {HiOutlineUsers} from "react-icons/hi2";
export default function CourseBox(props) {
   return (
      <div className=' flex flex-col dark:text-white bg-white dark:bg-darker border border-neutral-100 dark:border-none rounded-2xl'>
         {/* <!-- Course Banner --> */}

         <Link to={`/course/${props.id}`}>
            <img className='block w-full h-full object-cover rounded-2xl' src={props.cover} />
         </Link>

         {/* <!-- Course Title & Description --> */}

         <div className='flex-grow px-5 pt-4 pb-3'>
            {/* <!-- Course Title --> */}

            <h3 className='font-danaDemiBold  line-clamp-1  md:line-clamp-2  mb-3'>
               <Link to={`/course/${props.id}`}>{props.title}</Link>
            </h3>

            {/* <!-- Course Description --> */}

            <p className='text-sm  opacity-70  line-clamp-2'>{props.desc}</p>
         </div>

         {/* <!-- Course Footer --> */}

         <div class={`px-5 pb-3  ${props.slider && "md:mt-5 lg:sticky bottom-0 "} `}>
            {/* <!-- Teacher & Rating --> */}

            <div class='flex justify-between gap-2.5 text-slate-500 dark:text-white/70 text-sm pb-3 border-b border-b-neutral-200/70 dark:border-b-white/10'>
               <div class='flex items-center gap-x-0.5 hover:text-green-500 transition-colors'>
                  <HiOutlineUser />
                  {props.teacher}
               </div>

               {/* <!-- Rating --> */}

               <div class='flex items-center gap-x-1.5 text-amber-500'>
                  <span class='font-danaMedium mt-1.5'>5.0</span>
                  <FaStar />
               </div>
            </div>
            <div class='flex items-end justify-between my-3'>
               <span class='flex items-center gap-x-1 text-slate-500 dark:text-white/70 text-sm'>
                  <HiOutlineUsers className='text-lg' />
                  {props.student}
               </span>
               {/* <!-- Price --> */}

               <div class='flex flex-col'>
                  <span class=' -mb-1.5 text-success'>
                     {props.price ? Number(props.price).toLocaleString() + "تومان" : "رایگان"}
                  </span>
               </div>
            </div>
         </div>
      </div>
   );
}
