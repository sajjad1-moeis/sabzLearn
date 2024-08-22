import React from "react";
import {HiOutlineCreditCard} from "react-icons/hi2";

export default function DetialDashboardUserBox({title, desc, bg}) {
   return (
      <div
         className={`flex md:w-60 flex-grow md:flex-grow-0 items-center gap-2 text-white ${bg} p-2 rounded-2xl w-max`}
      >
         <div className=''>
            <div className='p-3 md:p-5 rounded-2xl bg-white/20 z-10'>
               <HiOutlineCreditCard className='text-3xl' />
            </div>
         </div>
         <div className='p-2 '>
            <p className='text-xs'>{title}</p>
            <p className='mt-2 md:text-lg danaMediumBold'>{desc}</p>
         </div>
      </div>
   );
}
