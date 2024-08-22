import React, {useEffect, useState} from "react";
import {HiArrowsUpDown} from "react-icons/hi2";
import {Button} from "@material-tailwind/react";
import {LuCheckCircle} from "react-icons/lu";
import "./FilterBtnBox.css";

const itemFilters = [
   {id: 1, title: "همه دوره ها", filter: ""},
   {id: 2, title: "ارزان ترین", filter: "ارزان"},
   {id: 3, title: "گران ترین", filter: "گران"},
   {id: 4, title: "پر مخاطب ها", filter: "مخاطب"},
];
export default function FilterBtnBox({clickHander, children}) {
   const [count, setCount] = useState(1);
   const [openDrawer, setOpenDrawer] = useState(false);

   return (
      <>
         <div className='md:flex rounded-xl dark:bg-darker mt-6 hidden gap-6 items-center bg-white dark:text-white'>
            <div className=' flex gap-2 items-center py-5 ps-5'>
               <HiArrowsUpDown className='text-[28px]' />
               <p>مرتب سازی بر اساس :</p>
            </div>
            {itemFilters.map((item) => (
               <div
                  key={item.id}
                  onClick={() => {
                     setOpenDrawer(false);
                     setCount(item.id);
                     clickHander(item.filter, item.id);
                  }}
                  className={`text-sm cursor-pointer py-5 relative ${item.id === count ? "activeFilter" : ""} h-full`}
               >
                  {item.title}
               </div>
            ))}
         </div>
         <div className='md:hidden flex gap-3'>
            {children}
            <Button
               onClick={() => setOpenDrawer(true)}
               className={`rounded-full font-thin text-base ${
                  children ? "w-1/2" : "w-full"
               } dark:bg-darker bg-white dark:text-white text-black`}
            >
               همه دوره ها
            </Button>
         </div>

         {/* <DrawerFilter open={openDrawer} setOpen={setOpenDrawer}>
            <div className='px-5'>
               {itemFilters.map((item) => (
                  <div
                     key={item.id}
                     className={`p-5 ${item.id === count && "text-success"} flex justify-between px-0 ${
                        item.id !== itemFilters.length && "border-b border-white/10"
                     }`}
                     onClick={() => {
                        setOpenDrawer(false);
                        setCount(item.id);
                        clickHander(item.filter, item.id);
                     }}
                  >
                     <p>{item.title}</p>
                     {item.id === count && <LuCheckCircle className='text-xl' />}
                  </div>
               ))}
            </div>
         </DrawerFilter> */}
      </>
   );
}
