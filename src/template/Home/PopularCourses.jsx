import React, {useEffect} from "react";
import SectionHeader from "../../components/common/SectionHeader";
import CourseBox from "../../components/common/CourseBox";
import SkeletonCustom from "../../components/common/Skeleton";
export default function PopularCourses({data}) {
   return (
      <div className='container relative   my-40'>
         <div className='absolute w-[250px] h-[250px] rounded-full opacity-25 -top-40 -left-40 blur-[125px] bg-blue-600'></div>

         <div className='relative'>
            <SectionHeader
               path='/courses/1'
               isCustom
               titleBtn='مشاهده همه دوره ها'
               title='محبوب ترین دوره ها'
               desc='پرمخاطب ترین و بهترین دوره های سبزلرن'
               bg='bg-blue-500'
            />
            {data?.length > 0 ? (
               <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 dark:text-white'>
                  {data.map((item) => (
                     <CourseBox {...item} />
                  ))}
               </div>
            ) : (
               <SkeletonCustom />
            )}
         </div>
      </div>
   );
}
