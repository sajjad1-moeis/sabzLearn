import React from "react";

export default function DescriptionBox({title, desc, element, className}) {
   return (
      <div className={className}>
         <div className='w-max mx-auto md:mx-0 '>{element}</div>
         <div className='dark:text-white text-center md:text-right'>
            <p className='danaSemiBold'>{title}</p>
            <p className='mt-1.5 text-sm dark:text-white/60'>{desc}</p>
         </div>
      </div>
   );
}
