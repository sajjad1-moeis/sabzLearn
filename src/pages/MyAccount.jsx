import React, {useEffect, useId, useState} from "react";
import {Link, NavLink, Outlet, useLocation} from "react-router-dom";

import TopBar from "../template/MyAccount/TopBar";
import {HiOutlineChatBubbleLeftRight, HiOutlineHome, HiOutlineUser} from "react-icons/hi2";
import {IoFolderOpenOutline} from "react-icons/io5";
// import {ImgLogo} from "../../Components/PageSubmit/PageLoginOrrRegister";

const itemUserDashboard = [
   {path: "/my-account", title: "پیشخوان", element: <HiOutlineHome />},
   {path: "/my-account/courses", title: "دوره های من", element: <IoFolderOpenOutline />},
   {path: "/my-account/ticket", title: "تیکت ها", element: <HiOutlineChatBubbleLeftRight />},
   {path: "/my-account/edit-account", title: " جزئیات حساب", element: <HiOutlineUser />},
];

export default function MyAccount() {
   let location = useLocation();

   return (
      <div className='md:bg-white md:dark:bg-dark-sm flex gap-x-10 2xl:gap-x-14 lg:px-8 xl:px-14 2xl:px-[100px] lg:py-7 min-h-screen'>
         <div className='max-w-[240px] w-full hidden lg:block '>
            <Link to='/'>
               <div className='flex items-center justify-center'>
                  <img src='/img/Header/logo.webp' className='h-10 md:h-16' />
                  <img src='/img/Header/logo2.png' alt='' />
               </div>
            </Link>

            {/* ItemDashbords */}

            <div className='dark:text-white mt-10'>
               {itemUserDashboard.map((item) => (
                  <div className='my-2' key={useId()}>
                     <Link to={item.path}>
                        <div
                           className={`flex gap-2.5 my-2 items-center p-3 rounded-lg hover:bg-success hover:text-white ${
                              item.path === location.pathname ? "bg-success text-white" : ""
                           }  cursor-pointer dark:hover:text-white  transition-colors s `}
                        >
                           <span className='text-2xl'>{item.element}</span>
                           <span className='text-base'>{item.title}</span>
                        </div>
                     </Link>
                  </div>
               ))}
            </div>
         </div>
         <div className='bg-gray-100 dark:bg-[#1C1C28] w-full lg:rounded-[32px] overflow-hidden  lg:p-10'>
            <TopBar />
            <div className='danaMediumBold text-lg dark:text-white md:hidden block p-5'>
               سجاد محمدی عزیز؛ خوش اومدی 🙌
            </div>
            <Outlet />
         </div>
         {/* <DrawerMyAccount open={openDrawer} setOpen={setOpenDrawer} arr={itemUserDashboard} /> */}
      </div>
   );
}
