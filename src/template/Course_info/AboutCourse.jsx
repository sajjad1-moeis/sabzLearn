import React, {useState} from "react";
import {HiDocumentText} from "react-icons/hi2";
import {Button} from "@material-tailwind/react";
import {IoIosArrowDown} from "react-icons/io";
export default function AboutCourse({data}) {
   const [showMoreAbout, setShowMoreAbout] = useState(false);
   return (
      <div className='mt-8 p-5 z-10 relative dark:bg-darker bg-white rounded-xl '>
         <div className='flex items-center gap-3  relative'>
            <span className='absolute -right-[26px] bg-amber-500 w-[6px] h-full rounded-tr-sm rounded-br-sm'></span>
            <HiDocumentText className='text-amber-500 text-4xl' />
            <p className='text-2xl danaMediumBold dark:text-white'>توضیحات</p>
         </div>
         <div className=' overflow-hidden'>
            <div className='my-10  dark:text-gray-400 leading-7'>
               قبل از
               <span className='mx-2 dark:text-white'>آموزش برنامه نویسی</span>
               لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و
               متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
               متنوع با هدف بهبود ابزارهای کاربردی می باشد{" "}
            </div>
            <div className=''>
               <img src={data} className='rounded-xl w-full' loading='lazy' alt='' />
            </div>
            <div className='mt-10 relative'>
               {!showMoreAbout && (
                  <div className='course-content-shadow absolute bottom-0 right-0 left-0 h-[160px] bg-gradient-to-t from-white dark:from-darker from-0% via-white/[55%] dark:via-darker/[55%] via-70% to-white/0 dark:to-darker/0 to-100%'></div>
               )}
               <div className='dark:text-gray-400'>
                  <p className='my-4 '>
                     کامپوننت محور بودن ری اکت باعث میشه شما با کدنویسی یک بخش بتونید بی نهایت بار در بخش های مختلف
                     پروژه از اون استفاده کنید و از طرفی میتونید پروژه هایی بسازید که بدون نیاز به رفرش، هر دیتا و بخشی
                     از صفحه رو تغییر بدید اون هم با سرعت نور! برای همین ری اکت، زمان کدنویسی و به اتمام پروژه رو خیلی
                     کوتاهتر از قبل کرده!
                  </p>
                  <p className='my-4 '>
                     خلاصه به شما تبریک میگیم که خیلی دقیق مطالعه کردید و به این نتیجه رسیدید که الان بهترین زمان برای
                     یادگیری ری اکت هست. پس از الان با تمام اطمینان خیالتون رو راحت می کنیم :
                  </p>
               </div>
               {showMoreAbout && (
                  <div className='dark:text-gray-400'>
                     <p className='my-4'>
                        وقتی شرکت‌ های معتبری مثل فیسبوک (Facebook)و شرکت بزرگ پرداخت بین المللی یعنی پی پال (PayPal) و
                        همینطور بزرگترین VOD جهان یعنی نتفلیکس، از ری اکت برای طراحی وب سایت و اپلیکیشن خودشون استفاده
                        کردن، پس خیالتون راحت باشه با یک تکنولوژی تمام عیار سروکار دارید که می‌تونید برای انجام هر پروژه
                        ای روی اون حساب کنید و در بازار کار حرفی برای گفتن داشته باشید. در ایران هم دیوار و اسنپ
                        بزرگترین پلتفرم‌هایی هستن که با ری اکت توسعه داده شدن!
                     </p>
                     <p className='my-4'>
                        در ادامه به تمام سوالات و دغدغه هایی که ممکنه قبل از شروع دوره در ذهن شما باشه جواب دادیم تا با
                        خیال راحت و دید باز مسیر آموزشتون رو شروع کنید.
                     </p>
                     <h1 className='text-xl md:text-3xl  danaSemiBold mt-10 dark:text-white'>
                        تو این دوره قراره چی یاد بگیریم؟
                     </h1>
                     <p className='my-4'>
                        در ادامه به تمام سوالات و دغدغه هایی که ممکنه قبل از شروع دوره در ذهن شما باشه جواب دادیم تا با
                        خیال راحت و دید باز مسیر آموزشتون رو شروع کنید.
                     </p>
                     <h1 className='text-xl md:text-3xl dark:text-white  danaSemiBold mt-10'>
                        این دوره برای چه کسانی مناسب هست؟
                     </h1>
                     <p className='my-4'>دوره جامع ری اکت برای دو دسته از دانشجوها خیلی مفید و کاربردی هست.</p>
                     <p className='my-4'>
                        دسته اول کسانی که آموزش جاوا اسکریپت رو تموم کردن و دنبال یک تکنولوژی مدرن و پولساز بر پایه جاوا
                        اسکریپت هستن تا از زبانی که یاد گرفتن استفاده کنن.
                     </p>
                     <p className='my-4'>دسته دوم کسانی که در حال حاضر در هر سطحی با ری اکت کار میکنن</p>
                     <p className='my-4'>
                        اگر جزو یکی از این دوتا دسته هستید، این دوره جامع برای شما تولید شده و اونقدر به دانش و تجربیات
                        شما اضافه می کنه که هر ایده و طرحی تو ذهنتون بیاد رو به راحتی بتونید پیاده سازی کنید یا بخش هایی
                        از پروژه های دیگران رو در پروژه خودتون بسازید.
                     </p>
                  </div>
               )}
            </div>
         </div>
         <div className='mx-auto w-max mt-10'>
            <Button
               className='rounded-full font-dana bg-success font-thin text-base   flex gap-1.5 items-center justify-between'
               onClick={() => setShowMoreAbout(!showMoreAbout)}
            >
               مشاهده بیشتر مطالب
               <IoIosArrowDown className='text-xl' />
            </Button>
         </div>
      </div>
   );
}
