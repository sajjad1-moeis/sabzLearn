import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {HiOutlineUser} from "react-icons/hi2";
import {Button} from "@material-tailwind/react";
export default function PageLoginOrrRegister({title1, title2, link, children}) {
   return (
      <div className='dark:bg-gray-1000 relative dark:text-white bg-gray-200 min-h-screen flex justify-center items-center'>
         <div className='absolute w-[300px] h-[300px] top-0 left-0 blur-[120px] rounded-full z-[0] bg-blue-500 opacity-20'></div>
         <div className='absolute w-[300px] h-[300px] bottom-0 right-0 blur-[120px] rounded-full z-[0] bg-amber-500 opacity-20'></div>
         <div className='relative z-10 max-w-[330px] w-full'>
            <ImgLogo />
            <div className=' w-full p-6 my-10 rounded-2xl dark:bg-darker bg-white'>
               <h1 className='danaSemiBold text-center text-xl w-full'>ورود موبایل</h1>
               <p className='my-5 text-center'>
                  {title1}
                  <Link className='text-success  text-lg' to={link}>
                     {title2}
                  </Link>
               </p>
               {children}

               <div className='flex justify-between'></div>
            </div>
            <p className='text-center leading-8'>
               با عضویت در سایت، تمامی قوانین و شرایط استفاده از خدمات{" "}
               <Link to='/' className='text-success'>
                  سبزلرن
               </Link>{" "}
               را پذیرفته اید.
            </p>
         </div>
      </div>
   );
}

export function ImgLogo() {
   return (
      <Link to='/'>
         <div className='flex items-center justify-center'>
            <img src='/img/Header/logo.webp' className='h-10 md:h-16' />
            <img src='/img/Header/logo2.png' alt='' />
         </div>
      </Link>
   );
}
