import {Button} from "@material-tailwind/react";
import React from "react";
import {CiPlay1} from "react-icons/ci";
export default function Landing() {
   return (
      <div className='flex  lg:grid-cols-2 lg:grid flex-col-reverse py-4 lg:py-12 dark:text-white text-black'>
         <div className=' flex justify-center items-center'>
            <div className='max-w-[500px] text-center lg:text-right lg:ps-10 p-5 relative'>
               <div className='absolute w-[250px] h-[250px] -top-24 -right-16 blur-[120px] rounded-full z-[0] bg-green-500 opacity-25'></div>
               <h1 className='lg:text-5xl text-2xl font-danaBold'>آکادمی آموزش</h1>
               <div className='relative'>
                  <h1 className='lg:text-5xl text-2xl font-danaBold my-7'>برنامه نویسی سبزلرن</h1>
                  <h3 className='lg:text-2xl text-lg mt-7 leading-9'>
                     با آکادمی خصوصی سبزلرن، علم برنامه نویسی رو با خیال راحت یاد بگیر و پیشرفت کن
                  </h3>
                  <div className='flex gap-5  my-10 w-max mx-auto'>
                     <Button className='p-3 font-dana px-4 rounded-full bg-blue-500 font-thin text-base'>
                        از این مسیر ها شروع کن
                     </Button>
                     <div className='flex gap-3 items-center'>
                        <Button className='p-4 bg-success rounded-full text-xl text-white'>
                           <CiPlay1 />
                        </Button>
                        دوره ها رایگان
                     </div>
                  </div>
               </div>
               <div className='absolute left-0 -bottom-24 w-[250px] h-[250px] blur-[120px] rounded-full z-[0] bg-blue-500 opacity-25'></div>
            </div>
         </div>
         <div className='lg:p-0 p-4'>
            <img src='/img/Home/Landing/student.svg' className='dark:hidden block  w-full  ' />
            <img src='/img/Home/Landing/student2.svg' className='dark:block  hidden  w-full' />
         </div>
      </div>
   );
}
