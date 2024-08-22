import React, {useState, useEffect} from "react";
import FilterBtnBox from "../../FilterBtnBox/FilterBtnBox";
import CurseBox from "../../CurseBox/CurseBox";
import Pagination from "../../Pagination/Pagination";
import {useNavigate} from "react-router-dom";
import FilterBox from "../Category_Info/FilterBox/FilterBox";
let arr = [2, 4, 5, 6, 7, 8, 7, 8, 9, 0, 2, 3, 2, 3, 3];

export default function HomeCourse({arr}) {
   return (
      <div className='mt-8 grid grid-cols-1 md:grid-cols-4 gap-8'>
         <div className='md:col-span-1'></div>
         <div className='md:col-span-3'>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-7 mt-7'>
               {arr.map((item) => (
                  <CurseBox />
               ))}
            </div>
         </div>
      </div>
   );
}
