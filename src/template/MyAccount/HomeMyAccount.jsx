import React, {useEffect} from "react";
import ItemBox from "../../components/DetialDashboardUserBox";
import {IoIosArrowRoundBack} from "react-icons/io";
import {Link} from "react-router-dom";
import CourseBox from "../../components/CourseBoxAccount";
import TicketBox from "../../components/TicketBox";
import getDataSuapse from "../../../utils/getDataSuapse";

export default function HomeMyAccount() {
   let [courseData, fetchCourses] = getDataSuapse();

   useEffect(() => {
      fetchCourses("courseUser");
   }, []);
   return (
      <div className='md:mt-14 dark:text-white px-5 md:p-5 lg:p-0'>
         <div className='flex flex-wrap justify-center lg:justify-start gap-3 lg:gap-10 '>
            <ItemBox title='مجموع پرداخت ها' desc='1000000 تومان' bg='bg-amber-400' />
            <ItemBox title='دوره های من' desc='9 دوره' bg='bg-[#4e81fb]' />
            <ItemBox title='مجموع تیکت ها' desc='5 تیکت' bg='bg-[#f43f5e]' />
            <ItemBox title='موجودی حساب ' desc='0 تومان' bg='bg-success' />
         </div>
         <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-7'>
            <div>
               <div className='mb-5 p-4 bg-white dark:bg-dark-sm rounded-2xl justify-between flex items-center'>
                  <div className='md:text-xl'>اخیرا مشاهده شده</div>
                  <Link to='courses'>
                     <div className='bg-blue-500/10 p-2  text-sm text-blue-600 rounded-xl justify-between flex items-center gap-1 '>
                        همه دوره های ثبت نام شده
                        <IoIosArrowRoundBack className='text-2xl' />
                     </div>
                  </Link>
               </div>
               <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                  {courseData.length > 0 ? (
                     courseData.map((item) => <CourseBox {...item} />)
                  ) : (
                     <span>دوره ای وجود ندارد...!</span>
                  )}
               </div>
            </div>
            <div>
               <div className='bg-white dark:bg-dark-sm p-5 rounded-2xl mb-7'>
                  <div className='flex items-center justify-between pb-5 border-b border-white/5'>
                     <p className='text-xl'>تیکت های اخیر</p>
                     <Link to='ticket'>
                        <div className='  text-sm text-blue-600 rounded-xl flex items-center justify-between gap-1 '>
                           همه تیکت ها
                           <IoIosArrowRoundBack className='text-2xl' />
                        </div>
                     </Link>
                  </div>
                  <div className=' py-5'>
                     <TicketBox />
                     <TicketBox />
                     <TicketBox />
                  </div>
               </div>
               <div className='bg-white dark:bg-dark-sm p-5 rounded-2xl'>
                  <div className='flex items-center justify-between pb-5 border-b border-white/5'>
                     <p className='text-xl'>پرسش های اخیر</p>
                  </div>
                  <div className=' py-5'>
                     <TicketBox />
                     <TicketBox />
                     <TicketBox />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
