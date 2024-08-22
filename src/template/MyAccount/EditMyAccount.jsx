import React from "react";
import {HiMiniArrowPathRoundedSquare} from "react-icons/hi2";
import InputForm from "../../components/common/InputForm";
import {Button} from "@material-tailwind/react";
// import {RiProhibited2Line} from "react-icons/ri";

let itemInput = [
   {id: "name", disable: false, title: "نام", placeholder: "..."},
   {id: "family", disable: false, title: "نام خانوادگی", placeholder: "..."},
   {id: "", disable: true, title: "نام کاربری", placeholder: "..."},
   {id: "email", disable: false, title: "ایمیل", placeholder: "..."},
];

export default function EditMyAccount() {
   const inputHandeler = () => {};
   return (
      <div className='grid grid-cols-1 md:grid-cols-3 mt-10 dark:text-white p-5 md:p-0 gap-10'>
         <div className='md:col-span-2 bg-white dark:bg-dark-sm p-5 rounded-2xl'>
            <div className='text-xl pb-5 border-b border-white/5'>جزییات حساب کاربری</div>
            <div className=' mt-5'>
               <div className='relative'>
                  <button className='bg-blue-500 absolute p-2 rounded-full bottom-0'>
                     <input
                        type='file'
                        className='opacity-0  w-full h-full z-10 absolute top-0 right-0 cursor-pointer'
                     />
                     <HiMiniArrowPathRoundedSquare className='text-2xl z-0' />
                  </button>
                  <img
                     className='h-36 rounded-full'
                     src='https://secure.gravatar.com/avatar/2ee0988654895362e164382a0c8fd3db?s=256&d=mm&r=g'
                     alt=''
                  />
               </div>
            </div>
            <div className='mt-10'>
               <div className='w-full md:w-1/2'>
                  <label> شماره موبایل </label>
                  <div className='relative'>
                     <div className='cursor-no-drop absolute w-full h-full'></div>
                     <InputForm placeholder='09186992098' disabled />
                  </div>
               </div>
               <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 gap-y-7'>
                  {itemInput.map((item) => (
                     <div key={item.title}>
                        <label>{item.title}</label>
                        <div className='relative'>
                           {item.disable && <div className='cursor-no-drop absolute w-full h-full'></div>}
                           <InputForm inputHandeler={inputHandeler} placeholder='09186992098' {...item} />
                        </div>
                     </div>
                  ))}
               </div>
               <div className='flex mt-5 justify-end'>
                  <Button className='p-4 rounded-xl text-xl font-thin bg-success px-6 font-dana'>ثبت اطلاعات</Button>
               </div>
            </div>
         </div>
         <div className='md:col-span-1 bg-white dark:bg-dark-sm p-5 rounded-2xl'>
            <div className='text-xl pb-5 border-b border-white/5'> تغییر رمز عبور</div>
            <div className='mt-8'>
               <label>رمز عبور فعلی</label>
               <div className='relative'>
                  <InputForm inputHandeler={inputHandeler} placeholder='رمز عبور فعلی را وارد کنید' id='prevPass' />
               </div>
            </div>
            <div className='mt-8'>
               <label>رمز عبور جدید</label>
               <div className='relative'>
                  <InputForm inputHandeler={inputHandeler} placeholder='رمز عبور جدید را وارد کنید' id='nextPass' />
               </div>
            </div>
            <div className='flex mt-5 justify-end'>
               <Button className='p-4 rounded-xl text-xl font-thin bg-success px-6 font-dana'>تغییر رمز</Button>
            </div>
         </div>
      </div>
   );
}
