import React, {useContext, useState} from "react";
import {IoNotificationsOutline} from "react-icons/io5";
import {HiBars3BottomRight} from "react-icons/hi2";
import {LuSun} from "react-icons/lu";
import {IoIosPower} from "react-icons/io";

export default function TopBar() {
   const [success, setSuccess] = useState("");
   const clickHandeler = () => {
      const is = JSON.parse(localStorage.getItem("theme"));
      document.body.classList.toggle("dark");
      localStorage.setItem("theme", !is);
   };
   return (
      <div className='flex w-full justify-between items-center dark:text-white  p-5 border-b border-white/10 md:border-0 lg:p-0'>
         <div onClick={() => setOpenDrawer(true)} className='md:hidden flex items-center gap-1'>
            <HiBars3BottomRight className='text-2xl' />
            پیشخوان
         </div>
         <div className='danaMediumBold text-2xl md:block hidden'>سجاد محمدی عزیز؛ خوش اومدی 🙌</div>

         <div className='flex items-center lg:gap-6 gap-4'>
            {/* <MenuBox
               className='dark:bg-[#32334D] rounded-xl max-w-[278px] w-full !outline-none border-none p-5 dark:text-white text-black'
               Handeler={
                  <div className='bg-white   cursor-pointer dark:bg-darker p-3 md:p-4 rounded-full text-2xl'>
                     <IoNotificationsOutline />
                  </div>
               }
            >
               <p className='outline-none'>هیچ اعلانی وجود ندارد</p>
            </MenuBox> */}

            <div
               onClick={clickHandeler}
               className='bg-white cursor-pointer dark:bg-darker p-3 md:p-4 rounded-full text-2xl'
            >
               <LuSun />
            </div>
            {/* <MenuBox
               className='dark:bg-[#32334D] rounded-xl max-w-[278px] w-full !outline-none border-none p-5 dark:text-white text-black'
               Handeler={
                  <img
                     src='https://secure.gravatar.com/avatar/2ee0988654895362e164382a0c8fd3db?s=96&d=mm&r=g'
                     className=' h-12 md:h-14 rounded-full cursor-pointer'
                  />
               }
            >
               <div className=' flex gap-4 items-center '>
                  <img
                     className='h-14 rounded-full'
                     src='https://secure.gravatar.com/avatar/2ee0988654895362e164382a0c8fd3db?s=96&d=mm&r=g'
                     alt=''
                  />
                  <div className=''>
                     <p className='danaMediumBold text-base'>سجاد محمدی</p>
                     <p className='text-sm text-success mt-4'>موجودی: 0 تومان</p>
                  </div>
               </div>
               <div className='mt-7 py-2  outline-none border-y border-white/5'>
                  {/* {itemUserDashboard.map((item) => (
                     <ItemDashborad
                        key={item}
                        className='dark:hover:bg-dark-sm hover:bg-gray-200'
                        active='dark:bg-dark-sm bg-gray-200'
                        {...item}
                     />
                  ))} 
               </div>
               <div
                  onClick={() => {
                     authContext.logoutUser();
                     setSuccess("با موفقیت خروج کردید");
                  }}
                  className='outline-none'
               >
                  <ItemDashborad
                     className='hover:bg-danger'
                     active='bg-dark-sm'
                     element={<IoIosPower />}
                     title='خروج'
                  />
               </div> 
            </MenuBox>
               */}
         </div>
      </div>
   );
}
