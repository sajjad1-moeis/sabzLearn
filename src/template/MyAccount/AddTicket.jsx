import {Button} from "@material-tailwind/react";
import React from "react";

export default function AddTicket() {
   return (
      <div className='mt-8 bg-white dark:bg-dark-sm p-5 dark:text-white rounded-2xl'>
         <div className='text-xl pb-5 border-b border-white/5'>ارسال تیکت</div>
         <div className='mt-5'></div>
         <div className=''>
            <label htmlFor=''>دپارتمان</label>
            <select name='' id='' className='outline-none w-full mt-5 bg-gray-100 p-5 rounded-xl dark:bg-dark-xs'>
               <option className='dark:bg-dark-xs bg-gray-100' value='-1'>
                  دپارتمان مورد نظر ...
               </option>
               <option className='dark:bg-dark-xs bg-gray-100' value=''>
                  مالی
               </option>
               <option className='dark:bg-dark-xs bg-gray-100' value=''>
                  ارتباط با مدیریت
               </option>
               <option className='dark:bg-dark-xs bg-gray-100' value=''>
                  پشتیبانی
               </option>
               <option className='dark:bg-dark-xs bg-gray-100' value=''>
                  مشاوره
               </option>
            </select>
            <input type='text' className='bg-transparent' />
         </div>
         <div className='mt-5'>
            <label htmlFor=''>موضوع تیکت </label>
            <input
               placeholder='موضوع تیکت خود را وارد کنید'
               type='text'
               className='outline-none w-full mt-5 bg-gray-100 p-3.5 rounded-xl dark:bg-dark-xs'
            />
         </div>
         <div className='mt-5'>
            <label htmlFor=''>متن تیکت </label>
            <textarea
               placeholder='موضوع تیکت خود را وارد کنید'
               type='text'
               className='min-h-[250px] outline-none w-full mt-5 bg-gray-100 p-3.5 rounded-xl dark:bg-dark-xs'
            />
         </div>
         <div className='flex mt-5 justify-end'>
            <Button className='p-2 rounded-xl text-lg font-thin bg-success px-4'>ارسال</Button>
         </div>
      </div>
   );
}
