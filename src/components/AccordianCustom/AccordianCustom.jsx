import React, {useState} from "react";
import {IoIosArrowDown} from "react-icons/io";
export default function AccordianCustom({title, children}) {
   const [stateAcord, setStateAcord] = useState(true);
   return (
      <div className='dark:bg-darker w-full bg-white p-5 rounded-xl mb-5 '>
         <div
            className={`flex justify-between items-center cursor-pointer  ${stateAcord && "pb-4 border-b border-white/10"}`}
            onClick={() => setStateAcord(!stateAcord)}
         >
            <div className=''>{title}</div>
            <div className={`${stateAcord ? "rotate-180" : "rotate-0"} dark:text-white text-2xl`}>
               <IoIosArrowDown />
            </div>
         </div>
         {stateAcord && children}
      </div>
   );
}
