import {HiAcademicCap} from "react-icons/hi2";
import {IoIosArrowDown} from "react-icons/io";
import {AiOutlinePlayCircle} from "react-icons/ai";
import {Link, useParams} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
export default function AccordianCustom() {
   let parms = useParams();
   const containerAccord = useRef();
   const [stateAccord, setStateAccord] = useState(false);

   return (
      <div className='my-5 rounded-xl accordParent bg-gray-100  dark:text-white dark:bg-dark-medium cursor-pointer overflow-hidden '>
         <div className={`w-full p-5 flex justify-between ${stateAccord && "bg-success text-white"}`} onClick={() => setStateAccord(!stateAccord)}>
            <p className='danaMediumBold'>پیش نیاز های ری اکت</p>
            <div className='flex gap-2 text-sm items-center'>
               <div className='hidden md:flex gap-2'>
                  <p>20 جلسه </p>
                  <p>5 ساعت</p>
               </div>
               <IoIosArrowDown className={` ${stateAccord ? "rotate-180" : "rotate-0"} transition-transform  text-2xl`} />
            </div>
         </div>
         <div ref={containerAccord} className='' style={{transition: "0.3s", height: stateAccord ? containerAccord.current.scrollHeight : "0px"}}>
            <Link to=''>
               <div className='p-5 border-b border-white/5 md:flex justify-between hover:text-success transition-all'>
                  <div className='flex items-center gap-3'>
                     <p className='w-8 h-6 md:h-7 pt-1 dark:bg-white/10 flex items-center justify-center text-sm rounded'>1</p>
                     <div className=''> ویدیوی معرفی</div>
                  </div>
                  <div className='flex items-center gap-3 w-full md:w-max justify-end'>
                     <p className='mt-1'>15:5</p>
                     <p>
                        <AiOutlinePlayCircle className='text-2xl' />
                     </p>
                  </div>
               </div>
            </Link>
         </div>
      </div>
   );
}
