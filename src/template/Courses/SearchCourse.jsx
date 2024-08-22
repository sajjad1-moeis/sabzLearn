import React, {useEffect, useState} from "react";
import FilterBtnBox from "../../Components/FilterBtnBox/FilterBtnBox";
import CurseBox from "../../Components/CourseBox";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import FilterBox from "../Category_Info/FilterBox";
import SectionHeader from "../Home/SectionHeader";
import {useNavigate, useParams} from "react-router-dom";
import Pagination from "../../Components/Pagination";
import NotBoxImg from "../../Components/NotBoxImg/NotBoxImg";
let arr = [2, 4, 5, 6, 7, 8, 7, 8, 9, 0, 2, 3, 2, 3, 3, 2, 2];

export default function SearchCourse() {
   const [courses, setCourses] = useState([]);
   const [itemsPagination, setItemsPagination] = useState([]);
   const navigate = useNavigate();
   const {search} = useParams();

   useEffect(() => {
      setCourses(arr);
   }, []);

   const clickHander = (filter) => {
      let sortedArr = [...arr].sort((a, b) => a - b);
      switch (filter) {
         case "ارزان": {
            setCourses(sortedArr.slice(0, 4));
            break;
         }
         case "گران": {
            setCourses(sortedArr.reverse().slice(0, 3));
            break;
         }
         case "مخاطب": {
            setCourses([]);
            break;
         }
         default: {
            setCourses(arr);
         }
      }
      navigate(`/course/${search}/1`);
   };
   return (
      <div className='min-h-screen dark:bg-gray-1000'>
         <Header />
         <div className='container'>
            <SectionHeader title={`جستجو : ${search}`} bg='bg-amber-500'>
               <span className='text-xl text-blue-gray-500'>69 دوره آموزشی</span>
            </SectionHeader>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-7 mt-8'>
               <div className='mt-1'>
                  <FilterBox />
               </div>
               <div className='md:col-span-3'>
                  <FilterBtnBox clickHander={clickHander} />
                  {itemsPagination.length !== 0 ? (
                     <div className='  grid grid-cols-1 md:grid-cols-3 mt-7 gap-7 '>
                        {itemsPagination.map((item) => (
                           <CurseBox />
                        ))}
                     </div>
                  ) : (
                     <NotBoxImg />
                  )}
                  <Pagination
                     items={courses}
                     setItemsShow={setItemsPagination}
                     countPage={9}
                     url={`/course/${search}`}
                  />
               </div>
            </div>
         </div>
         <Footer />
      </div>
   );
}
