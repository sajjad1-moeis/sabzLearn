import React, {useState} from "react";
import {Avatar, Button, Tooltip} from "@material-tailwind/react";
import {useCopyToClipboard} from "usehooks-ts";
import {HiOutlineClipboardDocument} from "react-icons/hi2";
import {IoMdCheckmarkCircleOutline} from "react-icons/io";
export default function ClipboardBox() {
   const [value, copy] = useCopyToClipboard();
   const [copied, setCopied] = useState(false);

   return (
      <>
         <div
            dir='ltr'
            className='flex mt-5 w-full items-center bg-blue-500/10 text-blue-500 justify-between p-4 border border-dashed border-blue-500 rounded-lg'
         >
            <p className='text-lg flex-none w-10/12 overflow-hidden whitespace-pre text-left'>
               https://sabzlearn.ir/?p=82
            </p>
            <Tooltip content={!copied ? "کپی کردن" : "کپی شد"}>
               <button
                  className='text-2xl text-blue-500'
                  onMouseLeave={() => {
                     setTimeout(() => {
                        setCopied(false);
                     }, 1000);
                  }}
                  onClick={() => {
                     copy("https://sabzlearn.ir/?p=82");
                     setCopied(true);
                  }}
               >
                  {copied ? <IoMdCheckmarkCircleOutline /> : <HiOutlineClipboardDocument />}
               </button>
            </Tooltip>
         </div>
      </>
   );
}
