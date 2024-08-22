import React from "react";
import ItemBox from "../../components/DetialDashboardUserBox";
import {GoPlusCircle} from "react-icons/go";
import TicketBox from "../../components/TicketBox";
import {Link} from "react-router-dom";
export default function TicketMyAccount() {
   return (
      <div className='md:mt-14 dark:text-white px-5 md:p-5 lg:p-0 pb-5'>
         <div className='md:flex justify-between'>
            <div className=''>
               <div className='flex flex-wrap justify-center lg:justify-start gap-3 lg:gap-10 '>
                  <ItemBox title='مجموع پرداخت ها' desc='1000000 تومان' bg='bg-amber-400' />
                  <ItemBox title='دوره های من' desc='9 دوره' bg='bg-[#4e81fb]' />
                  <ItemBox title='مجموع تیکت ها' desc='5 تیکت' bg='bg-[#f43f5e]' />
               </div>
            </div>
            <Link to='/my-account/add-ticket'>
               <div className='bg-[#4e81fb]  text-white mt-3 md:m-0 rounded-2xl p-5  items-center justify-center h-full flex  gap-4 cursor-pointer'>
                  <GoPlusCircle className='text-3xl' />
                  <p className='text-xl'>تیکت جدید</p>
               </div>
            </Link>
         </div>
         <div className='mt-8 bg-white dark:bg-dark-sm p-5 rounded-2xl'>
            <div className='text-xl pb-5 border-b border-white/5'>تیکت ها</div>
            <div className='pt-5'>
               <TicketBox />
               <TicketBox />
               <TicketBox />
               <TicketBox />
               <TicketBox />
            </div>
         </div>
      </div>
   );
}
