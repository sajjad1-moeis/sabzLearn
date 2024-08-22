import React, {useState} from "react";
import {IoSearchOutline} from "react-icons/io5";
import {Switch} from "@material-tailwind/react";
import {useNavigate} from "react-router-dom";

export default function FilterBox() {
   const [input, setInput] = useState("");
   const navigate = useNavigate();
   return (
      <div className=''>
         <div className='my-5 dark:bg-darker bg-white p-5 items-center rounded-lg flex justify-between'>
            <input
               type='text'
               className='bg-transparent outline-none border-none dark:text-white dark:placeholder:text-blue-gray-500'
               placeholder='جستجو بین دوره ها'
               onChange={(event) => setInput(event.target.value)}
               onKeyDown={(event) => event.keyCode === 13 && navigate(`/course/${input}/1`) + setInput("")}
               value={input}
            />
            <div className='cursor-pointer' onClick={() => input && navigate(`/course/${input}/1`) + setInput("")}>
               <IoSearchOutline className='dark:text-white text-2xl' />
            </div>
         </div>
         <div className='my-5 dark:bg-darker md:flex hidden  dark:text-white bg-white p-5 items-center rounded-lg  justify-between'>
            <p>فقط دوره های رایگان</p>
            <Switchs />
         </div>
         <div className='my-5 dark:bg-darker md:flex hidden  dark:text-white bg-white p-5 items-center rounded-lg  justify-between'>
            <p>در حال پیش فروش</p>
            <Switchs />
         </div>
      </div>
   );
}

function Switchs() {
   return (
      <Switch
         className='h-full w-full  checked:!bg-blue-500 dark:bg-[#333C4C]'
         containerProps={{
            className: "w-11 h-6",
         }}
         ripple={false}
         circleProps={{
            className: "before:hidden left-0.5 border-none dark:bg-darker",
         }}
      />
   );
}
