import {Progress} from "@material-tailwind/react";
import React from "react";
import {Link} from "react-router-dom";

export default function CourseBox(props) {
   return (
      <Link to={`/course/${props.id}`}>
         <div className='rounded-2xl dark:bg-dark-sm dark:border border-dark-semi overflow-hidden'>
            <img className='rounded-2xl' src={props.cover} alt='' />
            <div className='p-5 pb-2 border-b border-white/5'>
               <p>{props.title}</p>
               <div className='flex justify-between items-center mt-5 dark:text-blue-gray-500 '>
                  <p className='text-xs'>میزان مشاهده</p>
                  <p className='text-xs'>45%</p>
               </div>
               <Progress size='sm' className='bg-[#32334D] my-2' color='green' value={50} />
            </div>
         </div>
      </Link>
   );
}
