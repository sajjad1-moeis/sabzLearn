import React, {useEffect, useState} from "react";
import Breadcrumbs from "../components/common/Breadcrumbs/Breadcrumbs";
import VideoSection from "../template/Course_info/VideoSection";
import Descriptions from "../template/Course_info/Descriptions";
import StudentAndStar from "../template/Course_info/StudentAndStar";
import TeacherSection from "../template/Course_info/TeacherSection";
import AboutCourse from "../template/Course_info/AboutCourse";
import SesionCourse from "../template/Course_info/SesionCourse";
import RelatedCourse from "../template/Course_info/RelatedCourse";
import Comments from "../template/Course_info/Comments";
import getDataSuapse from "../../utils/getDataSuapse";
import {useParams} from "react-router-dom";
export default function CurseInfo() {
   const [courseData, fetchCourses] = getDataSuapse();
   const [courseInfo, setCourseInfo] = useState(null);
   let {curseName} = useParams();

   let itemBredCrumps = [
      {id: 1, title: "دوره ها"},
      {id: 2, title: " فرانت اند"},
      {id: 3, title: courseInfo?.title},
   ];

   useEffect(() => {
      fetchCourses("courses");
      window.scrollTo(0, 0);
   }, []);

   useEffect(() => {
      let findCourse = courseData.find((item) => item.id == curseName);
      setCourseInfo(findCourse);
   }, [courseData]);

   return (
      <div className='dark:bg-gray-1000 bg-gray-200'>
         <div className='container  pt-10 '>
            <Breadcrumbs arr={itemBredCrumps} />
            <VideoSection data={courseInfo} />
            <div className=' md:grid md:grid-cols-1 lg:grid-cols-3 mt-7 lg:mt-20 gap-7'>
               <div className='lg:col-span-2 mb-5 md:mb-0 h-max'>
                  <Descriptions />
                  <AboutCourse data={courseInfo?.cover} />
                  <SesionCourse />
                  <RelatedCourse />
                  <Comments />
               </div>
               <div className='lg:col-span-1'>
                  <StudentAndStar />
                  <TeacherSection data={courseInfo} />
               </div>
            </div>
         </div>
      </div>
   );
}
