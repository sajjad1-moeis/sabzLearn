import React from "react";
import SectionHeader from "../../components/common/SectionHeader";
import {IoBookOutline} from "react-icons/io5";
import {HiOutlineChartBar} from "react-icons/hi2";
import {HiOutlineClipboardDocumentCheck} from "react-icons/hi2";
import {HiOutlineChatBubbleLeftRight} from "react-icons/hi2";

let itemBox = [
   {icon: <IoBookOutline className='text-blue-500' />, bg: "bg-blue-50 dark:bg-blue-600/20"},
   {icon: <HiOutlineChatBubbleLeftRight className='text-amber-500' />, bg: "bg-amber-50 dark:bg-amber-500/20"},
   {icon: <HiOutlineChartBar className='text-green-500' />, bg: "bg-green-50 dark:bg-green-500/20"},
   {icon: <HiOutlineClipboardDocumentCheck className='text-red-500' />, bg: "bg-red-50 dark:bg-red-500/20"},
];

function ItemBox(props) {
   return (
      <div className='dark:bg-darker bg-white  p-6 rounded-2xl md:flex gap-1 items-center'>
         <div
            className={`flex mx-auto md:mx-0 justify-center lg:justify-end items-center w-[94px] h-13 lg:w-[52px] lg:h-[94px] mb-11 lg:mb-0 lg:ml-11 ${props.bg} rounded-full`}
         >
            <span className=' text-5xl translate-y-6 lg:-translate-x-6 lg:translate-y-0'>{props.icon}</span>
         </div>
         <div>
            <p className='danaSemiBold text-lg'>تضمین کاملترین محتوا</p>
            <p className=' dark:text-gray-400 text-blue-gray-700 mt-2'>
               بزار خیالت راحت کنم توی دوره هامون به ریز ترین موارد پرداختیم بعداز دیدن این دوره نیاز به هیچ آموزش دیگه
               ای نداری.
            </p>
         </div>
      </div>
   );
}

export default function HelpYou() {
   return (
      <div className='mt-40 container text-center md:text-right dark:text-white '>
         <SectionHeader
            bg='bg-blue-500'
            title='ما چه کمکی میتونیم بهت بکنیم'
            desc='از شروع مسیر کنارتیم نمیذاریم آب تو دلت تکون بخوره'
         >
            <span />
         </SectionHeader>

         <div className='grid grid-cols-1 md:grid-cols-2 gap-7 mt-5'>
            {itemBox.map((item) => (
               <ItemBox key={item.bg} {...item} />
            ))}
         </div>
      </div>
   );
}
