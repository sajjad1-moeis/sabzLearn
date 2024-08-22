import React from "react";
import {FaArrowLeft} from "react-icons/fa6";
import {Link} from "react-router-dom";
export default function SectionHeader({title, desc, bg, titleBtn, path, children}) {
   return (
      <div className={` md:flex justify-between   items-center dark:text-white text-black  mb-7 `}>
         <div className='mx-auto md:mx-0'>
            <div className='flex items-center justify-center md:justify-start gap-3'>
               <div className={`w-4 h-4 ${bg} rounded-sm`}></div>
               <p className=' text-2xl md:text-[27px] flex'>{title}</p>
            </div>
            {desc && <p className='my-4 text-blue-gray-500 md:text-lg  text-center '>{desc}</p>}
         </div>

         {children ? (
            children
         ) : (
            <Link to={path}>
               <div className='flex gap-2 items-center text-success hover:text-white p-4 cursor-pointer transition-all rounded-full hover:bg-success mx-auto w-max md:mx-0'>
                  {titleBtn}
                  <FaArrowLeft />
               </div>
            </Link>
         )}
      </div>
   );
}
