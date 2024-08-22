import React from "react";
import DescriptionBox from "../../components/DescriptionBox";
import {HiMiniUserGroup} from "react-icons/hi2";
import {FaStar} from "react-icons/fa";
import {Progress} from "@material-tailwind/react";
export default function StudentAndStar({data}) {
   return (
      <div className='dark:bg-darker bg-white  rounded-2xl p-[26px]'>
         <div className='grid grid-cols-2 gap-6 '>
            <DescriptionBox
               title={data?.student.toLocaleString()}
               desc='دانشجو'
               className='p-3 rounded-xl bg dark:bg-dark-medium bg-white flex gap-3 '
               element={<HiMiniUserGroup className='text-success text-[42px]' />}
            />
            <DescriptionBox
               title='5.0'
               desc='رضایت'
               className='p-3 rounded-xl bg dark:bg-dark-medium bg-white flex gap-3'
               element={<FaStar className='text-warning text-[40px]' />}
            />
         </div>
         <div className='mt-8'>
            <div className='flex justify-between danaSemiBold  dark:text-white'>
               <p>درصد تکمیل دوره</p>
               <p>100%</p>
            </div>
            <Progress value={100} color='green' className='mt-3' />
         </div>
      </div>
   );
}
