import React from "react";

export default function NotBoxImg() {
   return (
      <>
         <div className='py-8 md:py-20 flex justify-center items-center rounded-2xl border-dashed  border border-blue-gray-500 mt-8'>
            <div>
               <img src='/img/not-search.png' className='mx-auto' alt='' />
               <div className='mt-8'>
                  <p className='danaSemiBold text-lg text-center p-5 md:p-5 dark:text-white'>
                     متاسفانه دوره ای مطابق با جستجوی شما پیدا نشد ):
                  </p>
               </div>
            </div>
         </div>
      </>
   );
}
