import React from "react";
import {HiChatBubbleLeftRight} from "react-icons/hi2";
import {Button} from "@material-tailwind/react";
import {HiOutlineChatBubbleBottomCenterText} from "react-icons/hi2";
import CommentBox from "../../components/CommentBox";
import {IoIosArrowDown} from "react-icons/io";
export default function Comments() {
   return (
      <div className='p-5 my-8 rounded-xl dark:text-white dark:bg-darker bg-white'>
         <div className='text-red-500 flex items-center gap-3 my-2  relative  justify-between'>
            <div className='flex items-center gap-3'>
               <span className='absolute -right-[26px] bg-red-500 w-[6px] h-full rounded-tr-sm rounded-br-sm'></span>
               <HiChatBubbleLeftRight className='text-4xl' />
               <p className='text-2xl danaMediumBold dark:text-white'>نظرات</p>
            </div>
            <Button className='rounded-full bg-success px-3 py-2.5 font-thin text-sm  text-white flex gap-2 items-center justify-between'>
               ایجاد نظر جدید
               <HiOutlineChatBubbleBottomCenterText className='text-xl' />
            </Button>
         </div>
         <CommentBox />
         <CommentBox />
         <Button className='rounded-full bg-success px-3 py-2.5 font-thin text-base mx-auto mt-7 mb-2  text-white flex gap-2 items-center justify-between'>
            مشاهده بیشتر
            <IoIosArrowDown className='text-xl' />
         </Button>
      </div>
   );
}
1675;
