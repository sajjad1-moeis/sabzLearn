import React from "react";
import {HiOutlineUser} from "react-icons/hi2";
import {SlEye} from "react-icons/sl";
import {CiCalendar} from "react-icons/ci";
import {Link} from "react-router-dom";
export default function AboutArticle() {
   return (
      <div className='dark:bg-darker rounded-xl p-6 bg-white dark:text-white '>
         <h1 className='pb-5 text-2xl bt-2 danaMediumBold border-b border-white/10 relative'>
            <div className='absolute h-3/4 w-[6px] bg-blue-500 -right-7 '></div>
            پیش نیازهای یادگیری جاوا اسکریپت
         </h1>
         <div className='flex gap-4 items-center mt-5 dark:text-gray-400'>
            <div className='flex-center gap-3'>
               <HiOutlineUser className='text-2xl' />
               شقایق ستیه نیا
            </div>
            <div className='flex-center gap-3 '>
               <CiCalendar className='text-2xl' />
               1403/02/07
            </div>
            <div className='flex-center gap-3'>
               <SlEye className='text-2xl' />
               188
            </div>
         </div>
         <div className='mt-8 dark:text-gray-400'>
            <img
               className='rounded-xl w-full'
               src='https://sabzlearn.ir/wp-content/uploads/2021/09/prerequisite-for-learning-javascript.webp'
               alt=''
            />
            <p className='my-6'>
               بدون شک، یادگیری <a href='https://sabzlearn.ir/blog/what-is-javascript/'>زبان جاوا اسکریپت</a> یکی از
               اساسی‌ترین مراحل در مسیر توسعه وب است. این زبان برنامه‌نویسی پویا، که از طریق مرورگرهای اینترنتی اجرا
               می‌شود، امروزه بخش بسیار مهمی از جهان دیجیتال را تشکیل می‌دهد. اما پیش از آنکه به اعماق جاوا اسکریپت
               برویم و <strong className='dark:text-white'>پیش نیازهای یادگیری جاوا اسکریپت</strong> را باهم برسی کنیم،
               بیاید به یک مسئله مهم توجه کنیم.
            </p>
            <p className='my-6'>
               در جهانی که هر روزه به سرعت دیجیتالی‌تر می‌شود، یادگیری یک زبان برنامه‌نویسی مانند جاوا اسکریپت تبدیل به
               یکی از مهم‌ترین ابزارها برای فعالیت در عرصه فناوری وب شده است. اما آیا به تنهایی{" "}
               <Link
                  to='/curse-info/js'
                  href='https://sabzlearn.ir/course/java-script-zero-to-hero/'
                  className='text-blue-500'
               >
                  آموزش جاوا اسکریپت
               </Link>{" "}
               کافی است؟ آیا برای موفقیت در این عرصه، تنها آشنایی با این زبان کافی است؟
            </p>
            <p className='my-6'>
               در این مقاله، به بررسی پیش‌نیازهای یادگیری جاوا اسکریپت خواهیم پرداخت. از مفاهیم ابتدایی مانند HTML و CSS
               گرفته تا مفاهیم پیشرفته‌تر مانند انتخاب فریمورک یا کتابخانه مناسب، همه این عوامل در مسیر آموزش جاوا
               اسکریپت اهمیت بسیاری دارند. بنابراین، قبل از ورود به دنیای برنامه‌نویسی جاوا اسکریپت، باید این پیش‌نیازها
               را به خوبی فرا بگیریم.
            </p>
            <p className='my-6'>
               در این مقاله، به بررسی این پیش‌نیازها خواهیم پرداخت و راهنمایی‌هایی برای یادگیری موثر جاوا اسکریپت ارائه
               خواهیم داد. از ابتدایی‌ترین مفاهیم تا مهارت‌های پیشرفته، همه در این مسیر آموزشی قرار دارند. بنابراین، با
               ما همراه باشید و با دقت این مقاله را دنبال کنید تا با آموزش مناسب، به یک برنامه‌نویس ماهر در زمینه جاوا
               اسکریپت تبدیل شوید.
            </p>
            <Link to='/curse-info/js'>
               <img className='rounded-xl' src='https://sabzlearn.ir/wp-content/uploads/2024/01/JS-2.webp' alt='' />
            </Link>
         </div>
      </div>
   );
}
