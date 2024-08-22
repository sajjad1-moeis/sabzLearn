import React, {useReducer} from "react";
import {FaInstagram} from "react-icons/fa";
import {LiaTelegramPlane} from "react-icons/lia";

export default function Footer() {
   return (
      <div className=' dark:bg-darker bg-white'>
         <div className='container'>
            <div className=' grid gap-10 grid-cols-1 md:grid-cols-2 border-b dark:border-white/10 lg:grid-cols-4 p-10 dark:text-white text-black'>
               <div>
                  <h1 className='danaSemiBold'>درباره ما</h1>
                  <div className='my-3 dark:opacity-70 leading-7 '>
                     سبزلرن یک اکادمی خصوصی آموزش برنامه نویسی هست که با هدف تحویل نیروی متخصص بر پایه تولید محتوای
                     غیرسطحی فعالیت میکند
                  </div>
               </div>
               <div>
                  <h1 className='danaSemiBold'>دسترسی سریع</h1>
                  <ul className='my-3 dark:opacity-70'>
                     <li className='my-3'>قوانین و مقررات</li>
                     <li className='my-3'>ارسال تیکت</li>
                     <li className='my-3'>همه دوره ها</li>
                  </ul>
               </div>
               <div>
                  <h1 className='danaSemiBold'>لینک های مفید</h1>
                  <ul className='my-3 dark:opacity-70'>
                     <li className='my-3'>آموزش جاوااسکریپت</li>
                     <li className='my-3'>آموزش پایتون</li>
                     <li className='my-3'>آموزش HTML</li>
                     <li className='my-3'>آموزش CSS</li>
                  </ul>
               </div>
               <div>
                  <h1 className='danaSemiBold'>شبکه های اجتماعی</h1>
                  <div className='my-5'>
                     <div className='flex items-center gap-3'>
                        <div className=' rounded-full p-2 w-max bg-orange-600 text-white bg-gradient-to-tr from-[#FEDC15] via-[#F71F87] to-[#9000DC]'>
                           <FaInstagram className='text-xl' />
                        </div>
                        sajjad-moeinfard@
                     </div>
                     <div className='flex items-center gap-3 mt-5'>
                        <div className=' rounded-full p-2 bg-blue-500 text-white bg-gradient-to-b from-blue-400 to-blue-600'>
                           <LiaTelegramPlane className='text-xl' />
                        </div>
                        sajjad-moeinfard@
                     </div>
                     <div></div>
                  </div>
               </div>
            </div>
            <div className='p-5 md:flex block justify-between text-darker dark:text-white'>
               <div>ساخته شده با ❤️ در سبزلرن</div>
               <div>کلیه حقوق مادی و معنوی سایت برای سبز لرن محفوظ است.</div>
            </div>
         </div>
      </div>
   );
}
