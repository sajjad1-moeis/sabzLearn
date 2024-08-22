import React, {useEffect, useState} from "react";
import AddCourse from "./Courses/AddProduct";
import BestProduct from "./BestProduct/BestProduct";
import ChartCourse from "./ChartCourse/ChartCourse";
import TableProduct from "./TableProduct/TableProduct";
import {TABLE_ROWS} from "../../../../Routes/data";
export default function CoursesPanel() {
   return (
      <>
         <div className='grid grid-cols-1 md:grid-cols-7 gap-5 mt-5 overflow-hidden'>
            <div className=' text-white  md:col-span-4 p-10 rounded-md bg-grayAdmin'>
               <AddCourse />
            </div>
            <div className='md:col-span-3 '>
               <ChartCourse />
            </div>
         </div>
         <TableProduct arrBody={TABLE_ROWS} />
      </>
   );
}
