import React, {useEffect} from "react";

import Breadcrumbs from "../components/common/Breadcrumbs/Breadcrumbs";
import AboutArticle from "../template/ArticleInfo/AboutArticle";
import RelatedArticle from "../template/ArticleInfo/RelatedArticle";
import SuggestedArticle from "../template/ArticleInfo/SuggestedArticle";
import {useParams} from "react-router-dom";

export default function ArticleInfo() {
   // useEffect(() => {
   //    window.scrollTo(0, 0);
   // }, [par]);

   return (
      <div className='min-h-screen bg-gray-200 dark:bg-gray-1000 '>
         <div className='container '>
            <div className='py-10'>
               <Breadcrumbs
                  arr={[
                     {title: "وبلاگ", id: 1},
                     {title: "پیش نیازهای یادگیری جاوا اسکریپت", id: 2},
                  ]}
               />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-8 mb-20'>
               <div className='lg:col-span-3'>
                  <AboutArticle />
                  <SuggestedArticle />
               </div>
               <div className='md:col-span-1 '>
                  <RelatedArticle />
               </div>
            </div>
         </div>
      </div>
   );
}
