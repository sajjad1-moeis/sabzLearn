import React, {Children} from "react";
import SectionHeader from "../../components/common/SectionHeader";
import {Link} from "react-router-dom";

function ItemBox({gradint, path, title, desc, children}) {
   return (
      <Link to={path}>
         <div className={`py-5 bg-gradient-to-r ${gradint}  overflow-hidden rounded-2xl`}>
            <div className='w-max mx-auto text-center'>
               {children}
               <p className='text-lg mt-5 text-white '>{title}</p>
               <p className='text-[15px] mt-1.5 text-white '>{desc} دوره</p>
            </div>
         </div>
      </Link>
   );
}

export default function RodmapSection() {
   return (
      <div className='container relative mt-40'>
         <div className='absolute w-[250px] z-0 opacity-25 h-[250px] blur-[120px] rounded-full bg-danger -top-32 -right-40'></div>
         <div className='relative'>
            <SectionHeader bg='bg-danger' title='نقشه راه ها' desc='نقشه های راه برای شروع اصولی یادگیری'>
               <span />
            </SectionHeader>

            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 mt-5'>
               <ItemBox
                  path='/category-info/frontend/1'
                  gradint='from-[#FFB535] to-[#F2295B]'
                  title='فرانت اند'
                  desc='28'
               >
                  <img src='/img/Home/RodmapSection/2.png' className='mx-auto' />
               </ItemBox>
               <ItemBox path='/category-info/security/1' gradint='from-[#30C5E4] to-[#28E55D]' title='امنیت' desc='9'>
                  <img src='/img/Home/RodmapSection/1.png' className='mx-auto' />
               </ItemBox>
               <ItemBox path='/category-info/python/1' gradint='from-[#2E9EFF] to-[#9C33F7]' title='پایتون' desc='6'>
                  <img src='/img/Home/RodmapSection/3.png' className='mx-auto' />
               </ItemBox>
               <ItemBox
                  path='/category-info/softskill/1'
                  gradint='from-[#FF3571] to-[#880175]'
                  title='مهارت های نرم'
                  desc='6'
               >
                  <img src='/img/Home/RodmapSection/4.png' className='mx-auto' />
               </ItemBox>
            </div>
         </div>
      </div>
   );
}
