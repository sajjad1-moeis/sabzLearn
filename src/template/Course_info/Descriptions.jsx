import React from "react";
import {HiOutlineInformationCircle} from "react-icons/hi2";
import {IoTimeOutline, IoCalendarOutline} from "react-icons/io5";
import {HiOutlineUsers, HiOutlineBriefcase} from "react-icons/hi2";
import {GoDeviceCameraVideo} from "react-icons/go";
import DescriptionBox from "../../components/DescriptionBox";
let itemBox = [
   {
      title: "وضعیت دوره",
      desc: "تکمیل شده",
      element: <HiOutlineInformationCircle className='text-success text-[42px]' />,
   },
   {title: "مدت زمان دوره", desc: "99 ساعت", element: <IoTimeOutline className='text-success text-[42px]' />},
   {title: "آخرین بروزرسانی", desc: "1402/10/15", element: <IoCalendarOutline className='text-success text-[42px]' />},
   {title: "روش پشتیبانی", desc: "گروه تلگرامی", element: <HiOutlineUsers className='text-success text-[42px]' />},
   {title: "پیش نیاز", desc: "HTML & CSS & JS", element: <HiOutlineBriefcase className='text-success text-[42px]' />},
   {title: "نوع مشاهده", desc: "دانلودی/آنلاین", element: <GoDeviceCameraVideo className='text-success text-[42px]' />},
];

export default function Descriptions() {
   return (
      <div className='grid grid-cols-2 md:grid-cols-3 gap-6'>
         {itemBox.map((item) => (
            <DescriptionBox
               key={item.title}
               className='p-5 rounded-xl dark:bg-darker bg-white md:flex gap-2 items-center'
               {...item}
            />
         ))}
      </div>
   );
}
