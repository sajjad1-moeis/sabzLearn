import React from "react";

import {Accordion, AccordionHeader, AccordionBody} from "@material-tailwind/react";

export function CourseMeetingBox() {
   const [open, setOpen] = React.useState(false);

   const handleOpen = (value) => setOpen(!open);

   return (
      <>
         <Accordion
            open={open}
            onClick={handleOpen}
            className=' bg-gray-100 dark:bg-dark-medium rounded-xl overflow-hidden my-3'
         >
            <button className={`flex-center p-5 ${open && "bg-success text-white"} transition-colors w-full`}>
               <div>سرفصل ها</div>
               <div className='flex items-center gap-2 '>51 lesson 43h 18m</div>
            </button>
            <AccordionBody className='dark:text-white font-dana p-5'>
               جلساتی برای این دوره در نظر گرفته نشده است ...!
            </AccordionBody>
         </Accordion>
      </>
   );
}
