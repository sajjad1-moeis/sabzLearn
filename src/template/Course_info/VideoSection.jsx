import React, {useEffect, useState} from "react";
import {Button} from "@material-tailwind/react";
import {HiOutlineAcademicCap} from "react-icons/hi2";
import {createClient} from "@supabase/supabase-js";
import getDataSuapse from "../../../utils/getDataSuapse";
import {useParams} from "react-router-dom";
const supabase = createClient(
   "https://uzklefihkajdqxvztxas.supabase.co",
   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV6a2xlZmloa2FqZHF4dnp0eGFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM5MDkyODMsImV4cCI6MjAzOTQ4NTI4M30.PjnUotcswjBsAcr7VewNElYdMGdnpub_ihx0WoO_GhA"
);
export default function VideoSection(props) {
   const [courseData, fetchCourses] = getDataSuapse();
   const [courseInfo, setCourseInfo] = useState(false);
   let {curseName} = useParams();

   useEffect(() => {
      fetchCourses("courseUser");
   }, []);

   useEffect(() => {
      let findCourse = courseData.find((item) => item.id == curseName);
      setCourseInfo(findCourse);
   }, [courseData]);

   const clickHandeler = async () => {
      const {data, error} = await supabase.from("courseUser").insert(props.data);
      location.reload();
   };

   return (
      <div className='mt-10 p-5 md:p-0  rounded-xl bg-white dark:bg-darker lg:!bg-transparent  flex flex-col-reverse lg:grid grid-cols-1 lg:grid-cols-2 gap-10 dark:text-white '>
         <div className=''>
            <h1 className=' text-xl lg:text-[28px] leading-10 danaMediumBold'>{props.data?.title}</h1>
            <h3 className='my-4 lg:text-lg  '>
               لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و
               متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
            </h3>
            <div className='lg:my-5 p-5 rounded-xl dark:bg-gray-1000 bg-white dark:lg:bg-darker  text-center lg:text-right lg:flex justify-between'>
               <div className='text-danger danaSemiBold text-xl'>48% پیشنهاد شگفت انگیز</div>
               <div className=''></div>
            </div>
            <div className='flex flex-col-reverse lg:flex-row  justify-between mt-4 lg:mt-8 items-center'>
               <div className=' w-full'>
                  <Button
                     onClick={!courseInfo ? clickHandeler : undefined}
                     className='font-dana font-thin rounded-full w-full lg:w-max justify-center bg-success text-lg flex gap-2 items-center px-4'
                  >
                     <HiOutlineAcademicCap className='text-2xl' />
                     {courseInfo ? "مشاهده دوره" : "ثبت نام در دوره"}
                  </Button>
               </div>
               <div className='flex gap-4 items-center mb-5 lg:mb-0'>
                  <span className='line-through'>4,800,000</span>
                  <span className='text-2xl danaSemiBold'>2,680,000</span>
               </div>
            </div>
         </div>
         <div className='overflow-hidden rounded-xl'>
            <video controls className='size-full'>
               <source
                  src='https://tech.sabzlearn.ir/uploads/amscan/ceh_v11/ceh1.mp4?h=alle47rRp8Kd2Q3xV--W0w&amp;t=1724145108'
                  type='video/mp4'
               />
            </video>
         </div>
      </div>
   );
}
