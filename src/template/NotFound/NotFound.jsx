import React from "react";
import {Button} from "@material-tailwind/react";
import {Link} from "react-router-dom";
export default function NotFound() {
   return (
      <div className='min-h-screen overflow-hidden dark:bg-gray-1000 bg-white relative dark:text-white'>
         <div className='absolute w-[300px] h-[300px] top-0 left-0 blur-[120px] rounded-full z-[0] bg-blue-500 opacity-20'></div>
         <div className='absolute w-[300px] h-[300px] bottom-0 right-0 blur-[120px] rounded-full z-[0] bg-amber-500 opacity-20'></div>
         <div className='flex items-center justify-center min-h-screen'>
            <div className=''>
               <img src='/img/not-found.png' alt='' />
               <p className='text-2xl danaMediumBold mt-10 text-center'>متاسفانه صفحه مورد نظر شما پیدا نشد.</p>
               <div className='mx-auto w-max'>
                  <Link to='/'>
                     <Button className='font-thin font-dana text-base mt-10 rounded-full bg-success'>
                        بازگشت به صفحه اصلی
                     </Button>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
}
