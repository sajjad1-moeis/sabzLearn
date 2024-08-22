import React, {useEffect} from "react";
import SectionHeader from "../../components/common/SectionHeader";
import CourseBox from "../../components/common/CourseBox";
import getDataSuapse from "../../../utils/getDataSuapse";
import SkeletonCustom from "../../components/common/Skeleton";
export default function LastCourse({data}) {
   return (
      <div className='container  dark:text-white text-black mt-20'>
         <SectionHeader
            path='/courses/1'
            titleBtn='مشاهده همه دوره ها'
            title='آخرین دوره های سبزلرن'
            desc='سکوی پرتاپ شما به سمت موفقیت'
            bg='bg-yellow-700'
         />

         {data?.length > 0 ? (
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 mt-5'>
               {data.map((item) => (
                  <CourseBox {...item} />
               ))}
            </div>
         ) : (
            <SkeletonCustom />
         )}
      </div>
   );
}
