import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {MenuCustom} from "./Menu";
import {itemNav} from "../../../routes/data";
import {GoSearch} from "react-icons/go";
import {FiSun} from "react-icons/fi";
import {IoMoonOutline} from "react-icons/io5";
import {HiOutlineUser} from "react-icons/hi2";
import {itemUserDashboard} from "../../../routes/data";
import {IoPower} from "react-icons/io5";
function ItemMenuUser(props) {
   return (
      <Link
         to={props.path}
         class='flex items-center justify-between px-2.5 h-12  rounded-lg hover:text-white hover:bg-green-500 transition-colors'
      >
         <span class='flex items-center gap-x-2 text-base'>
            <span className='text-xl'>{props.element}</span>
            {props.title}
         </span>
      </Link>
   );
}

export default function Header() {
   // Handeler Dark Mode And Light Mode
   const [open, setOpen] = useState(false);
   const clickHandeler = () => {
      const is = JSON.parse(localStorage.getItem("theme"));
      document.body.classList.toggle("dark");
      localStorage.setItem("theme", !is);
   };

   // Handeler Input Search

   const inputHandeler = () => {
      if (inputSearch) {
         navigate(`/course/${inputSearch}/1`);
         setInputSearch("");
      }
   };

   return (
      <div className='flex justify-between items-center  dark:bg-darker py-12 bg-white mx-auto max-w-[1920px] h-[84px] md:h-25 px-4 lg:px-12'>
         <div className='flex items-center gap-7'>
            {/* Logo  App  */}
            <Link to='/'>
               <img className='h-12' loading='lazy' src='/img/Header/logo.webp' alt='' />
            </Link>

            <div className='hidden lg:flex items-center gap-7'>
               {itemNav.map((item) => (
                  <MenuCustom
                     {...item}
                     hover
                     position='bottom-end'
                     offset={25}
                     arrow
                     className='dark:bg-darker border-y border-x-0 border-success shadow-none '
                  >
                     {item.arrMenu.map((subItem) => (
                        <p className='text-right p-3 ps-10 dark:text-white'>{subItem}</p>
                     ))}
                  </MenuCustom>
               ))}
            </div>
            {/* {itemNav.map(item)} */}
         </div>
         <div className=' flex items-center gap-3'>
            {/* Form Search  */}

            <form className='hidden xl:block'>
               <label className='relative h-13 block'>
                  <input
                     className='bg-gray-100 p-3.5 text-slate-500 dark:bg-white/5 dark:text-white text-sm font-danaMedium rounded-full pr-4 pl-12 xl:w-72 h-full outline-none'
                     type='text'
                     placeholder='چیو میخوای یاد بگیری؟'
                     name='s'
                  />
                  <button className='absolute left-4 top-0 bottom-0 text-xl my-auto text-slate-500 dark:text-white'>
                     <GoSearch />
                  </button>
               </label>
            </form>

            <button
               onClick={clickHandeler}
               className='bg-gray-200 text-slate-500 dark:text-white dark:bg-white/5 p-4 rounded-full text-xl'
            >
               <FiSun className='dark:block hidden' />
               <IoMoonOutline className='dark:hidden' />
            </button>

            <MenuCustom
               position='bottom-end'
               offset={16}
               filterBlur
               open={open}
               setOpen={setOpen}
               title={
                  <button
                     onClick={() => setOpen(true)}
                     className='bg-gray-200 z-50 text-slate-500 dark:text-white dark:bg-white/5 p-3.5 rounded-full text-2xl'
                  >
                     <HiOutlineUser />
                  </button>
               }
               className='dark:bg-darker border-none shadow-none w-[278px] p-5 rounded-2xl'
            >
               <div dir='rtl' className='outline-none dark:text-white'>
                  {/* <!-- User Info --> */}

                  <div className='flex items-center border-b border-b-neutral-200 dark:border-b-white/5 pb-5 mb-2'>
                     <Link to='/my-account' className='shrink-0'>
                        <img
                           src='https://secure.gravatar.com/avatar/f23ef7287095875a8b9579bb487b31ed?s=96&amp;d=mm&amp;r=g'
                           alt='Rasolking'
                           className='object-cover w-14 h-14 rounded-full inline-block'
                           loading='lazy'
                        />
                     </Link>
                     <div className='mr-3.5 flex flex-col gap-y-3 overflow-hidden'>
                        <span className='font-danaDemiBold inline-block truncate'>user Test</span>
                        <span className='text-sm font-danaMedium text-green-500 inline-block'>
                           موجودی: 0&nbsp;<span className='slms-price_symbol'>تومان</span>
                        </span>
                     </div>
                  </div>
                  {/* <!-- Dashboard Links --> */}

                  {itemUserDashboard.map((item) => (
                     <ItemMenuUser {...item} />
                  ))}

                  {/* <!-- Logout Link --> */}

                  <div
                     onClick={() => setOpen(false)}
                     className='mt-2 pt-2 border-t border-t-neutral-200 dark:border-t-white/5'
                  >
                     <Link className='flex items-center justify-between px-2.5 h-12 rounded-lg hover:text-white hover:bg-red-500 transition-colors'>
                        <span className='flex items-center gap-x-2 text-base'>
                           <IoPower className='text-xl' />
                           خروج
                        </span>
                     </Link>
                  </div>
               </div>
            </MenuCustom>
         </div>
      </div>
   );
}
