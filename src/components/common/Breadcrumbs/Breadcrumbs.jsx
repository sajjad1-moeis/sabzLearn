import React from "react";
import "./Breadcrumbs.css";
import {Link} from "react-router-dom";
import {HiOutlineHome} from "react-icons/hi2";
export default function Breadcrumbs({arr}) {
   return (
      <div className='w-full dark:bg-darker bg-white dark:text-white flex rounded-xl overflow-hidden'>
         <Link to='/'>
            <div className='p-3  breadDark relative dark:block hidden'>
               <HiOutlineHome className='text-2xl' />
            </div>
            <div className='p-3  breadLight relative dark:hidden block'>
               <HiOutlineHome className='text-2xl' />
            </div>
         </Link>
         {arr.map((item) => (
            <div key={item.id} className={`p-3 ps-10 ${item.id !== arr.length ? "breadDark" : ""} relative hidden dark:block flex-none`}>
               {" "}
               {item.title}
            </div>
         ))}
         {arr.map((item) => (
            <div key={item.id} className={`p-3 ps-10 ${item.id !== arr.length ? "breadLight" : ""} relative dark:hidden block flex-none`}>
               {item.title}
            </div>
         ))}
      </div>
   );
}
