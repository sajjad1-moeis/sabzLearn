import React, {useEffect, useRef, useState} from "react";
import Landing from "../template/Home/Landing";
import LastCourse from "../template/Home/LastCourse";
import RodmapSection from "../template/Home/RodmapSection";
import HelpYou from "../template/Home/HelpYou";
import NewCourses from "../template/Home/NewCourses";
import ArticleSabzlearn from "../template/Home/ArticleSabzlearn";
import PopularCourses from "../template/Home/PopularCourses";
import getDataSuapse from "../../utils/getDataSuapse";
import {createClient} from "@supabase/supabase-js";

export default function Home() {
   const [freeCourse, setFreeCourse] = useState(false);
   let [courseData, fetchCourses] = getDataSuapse();

   useEffect(() => {
      fetchCourses("courses");
   }, []);

   useEffect(() => {
      let data = courseData?.filter((item) => !item.price);
      setFreeCourse(data);
   }, [courseData]);

   return (
      <div className='dark:bg-gray-1000 bg-gray-100 min-h-screen overflow-hidden'>
         {console.log(courseData)}
         <Landing />
         <LastCourse data={courseData.slice(0, 8)} />
         <RodmapSection />
         <HelpYou />
         <NewCourses data={courseData.slice(0, 8)} />
         <ArticleSabzlearn />
         <PopularCourses data={freeCourse} />
      </div>
   );
}
