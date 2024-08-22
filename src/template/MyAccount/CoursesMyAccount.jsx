import React, {useEffect} from "react";
import CourseBox from "../../components/CourseBoxAccount";
import DetialDashboardUserBox from "../../components/DetialDashboardUserBox";
import getDataSuapse from "../../../utils/getDataSuapse";
export default function CoursesMyAccount() {
   let [courseData, fetchCourses] = getDataSuapse();

   useEffect(() => {
      fetchCourses("courseUser");
   }, []);

   return (
      <div className='md:mt-14 dark:text-white px-5 md:p-5 lg:p-0'>
         <div className='flex flex-wrap justify-center lg:justify-start gap-3 lg:gap-10  '>
            <DetialDashboardUserBox title='دوره های ثبت نام شده' desc='9 دوره' bg='bg-amber-400' />
            <DetialDashboardUserBox title='دوره های نقدی' desc='1 دوره' bg='bg-[#4e81fb]' />
            <DetialDashboardUserBox title='دوره های رایگان' desc='8 دوره' bg='bg-success' />
         </div>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8'>
            {courseData.length > 0 ? (
               courseData.map((item) => <CourseBox {...item} />)
            ) : (
               <span>دوره ای وجود ندارد...!</span>
            )}
         </div>
      </div>
   );
}
