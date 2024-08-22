import React, {useEffect, useId, useState} from "react";
import CurseBox from "../../CurseBox/CurseBox";
import Pagination from "../../Pagination/Pagination";
import {useNavigate, useParams} from "react-router-dom";
import {Button} from "@material-tailwind/react";
import {LuCheckCircle} from "react-icons/lu";
import "./Courses.css";
import {DrawerFilter} from "../../Drawer/Drawer";
import FilterBtnBox from "../../FilterBtnBox/FilterBtnBox";
const arr = [1, 2, 3, 4, 5, 6, 8, 9, 9, 9];

export default function Courses() {
   const [itemsShow, setItemsShow] = useState([]);
   const [courses, setCourses] = useState([]);
   const {categoryName} = useParams();

   const navigate = useNavigate();
   useEffect(() => {
      setCourses(arr);
   }, []);

   const clickHander = (filter, id) => {
      if (["گران", "ارزان"].includes(filter)) {
         let sortArr = arr.sort((a, b) => a - b);

         filter === "ارزان" ? setCourses(sortArr.slice(0, 5)) : setCourses(sortArr.reverse().slice(0, 3));
      } else if (filter === "مخاطب") {
         setCourses(arr.slice(0, 0));
      } else {
         setCourses(arr);
      }
      navigate(`/category-info/${categoryName}/1`);
   };

   return (
      <div>
         <FilterBtnBox clickHander={clickHander}>
            <Button className='rounded-full font-thin text-base w-1/2 dark:bg-darker bg-white dark:text-white text-black'>فیلتر</Button>
         </FilterBtnBox>

         {courses.length > 0 ? (
            <>
               <div className='grid grid-cols-1 md:grid-cols-3 gap-7 mt-7'>
                  {itemsShow.map((item, index) => (
                     <CurseBox key={index} />
                  ))}
               </div>
               <Pagination items={courses} setItemsShow={setItemsShow} countPage={9} url={`/category-info/${categoryName}`} />
            </>
         ) : (
            <div className='py-8 md:py-20 flex justify-center items-center rounded-2xl border-dashed  border border-blue-gray-500 mt-8'>
               <div>
                  <img src='/img/not-search.png' className='mx-auto' alt='' />
                  <div className='mt-8'>
                     <p className='danaSemiBold text-lg text-center p-5 md:p-5 dark:text-white'>متاسفانه دوره ای مطابق با جستجوی شما پیدا نشد ):</p>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
}
