import React, {useState} from "react";
import {Avatar, Button, Tooltip} from "@material-tailwind/react";
import {useCopyToClipboard} from "usehooks-ts";
import ClipboardBox from "../../components/ClipboardBox";
export default function TeacherSection({data}) {
   return (
      <>
         <div className='mt-8 '>
            <div className='p-5 rounded-2xl py-7 dark:bg-darker bg-white flex justify-center items-center'>
               <div>
                  <div className='flex justify-center items-center text-center'>
                     <Avatar
                        className='mx-auto h-[90px] w-[90px]'
                        src='https://secure.gravatar.com/avatar/f23ef7287095875a8b9579bb487b31ed?s=96&d=mm&r=g'
                     />
                  </div>
                  <p className='mt-4  text-lg dark:text-white danaMediumBold'>{data?.teacher} | مدرس دوره</p>
                  <div className='flex justify-center'>
                     <button
                        variant='outlined'
                        color='green'
                        className='text-success p-4 border-success border py-2.5 mt-4 rounded-full mx-auto font-thin'
                     >
                        مشاهده پروفایل من
                     </button>
                  </div>
               </div>
            </div>
         </div>
         <div className='mt-8 '>
            <div className='p-5 rounded-2xl  dark:bg-darker bg-white flex justify-center items-center'>
               <div className='w-full text-center'>
                  <p className='  text-lg dark:text-white danaMediumBold'>لینک کوتاه آموزش</p>
                  <ClipboardBox />
               </div>
            </div>
         </div>
      </>
   );
}
