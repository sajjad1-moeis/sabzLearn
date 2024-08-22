import React from "react";
import {HiOutlineUser} from "react-icons/hi2";
import {SlEye} from "react-icons/sl";
import {CiCalendar} from "react-icons/ci";
import {Link} from "react-router-dom";
export default function AboutArticle({data}) {
   console.log(data);
   return (
      <div className='dark:bg-darker rounded-xl p-6 bg-white dark:text-white '>
         <h1 className='pb-5 text-2xl bt-2 danaMediumBold border-b border-white/10 relative'>
            <div className='absolute h-3/4 w-[6px] bg-blue-500 -right-7 '></div>
            {data?.title}
         </h1>
         <div className='flex gap-4 items-center mt-5 dark:text-gray-400'>
            <div className='flex-center gap-3'>
               <HiOutlineUser className='text-2xl' />
               {data?.created}
            </div>
            <div className='flex-center gap-3 '>
               <CiCalendar className='text-2xl' />
               1403/02/07
            </div>
            <div className='flex-center gap-3'>
               <SlEye className='text-2xl' />
               {Math.round(Math.random() * 5555)}
            </div>
         </div>
         <div className='mt-8 dark:text-gray-400'>
            <img className='rounded-xl w-full' src={data?.cover} alt='' />
            <p className='my-6'>
               لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و
               متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
               متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </p>
            <p className='my-6'>
               لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و
               متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
               متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </p>
            <p className='my-6'>
               لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و
               متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
               متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </p>
            <p className='my-6'>
               لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و
               متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
               متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </p>
            <img
               className='rounded-xl size-full'
               src='https://assets.bitdegree.org/online-learning-platforms/storage/media/2018/08/what-is-a-web-developer.jpg'
               alt=''
            />
         </div>
      </div>
   );
}
