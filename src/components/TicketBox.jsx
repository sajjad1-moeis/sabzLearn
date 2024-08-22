import React from "react";

export default function TicketBox() {
   return (
      <div className='my-1 flex items-center justify-between hover:bg-gray-100 dark:hover:bg-[#32334D] p-3 rounded-xl transition-colors cursor-pointer'>
         <div className=''>رفع مشکل</div>
         <div className='flex items-center justify-between gap-2'>
            <p className='text-xs text-blue-gray-500'>1402/09/30</p>
            <p className='p-1 px-1.5 text-xs rounded text-amber-500 bg-amber-500/10'>بسته شده</p>
         </div>
      </div>
   );
}
