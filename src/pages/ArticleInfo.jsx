import React, {useEffect, useState} from "react";

import Breadcrumbs from "../components/common/Breadcrumbs/Breadcrumbs";
import AboutArticle from "../template/ArticleInfo/AboutArticle";
import RelatedArticle from "../template/ArticleInfo/RelatedArticle";
import SuggestedArticle from "../template/ArticleInfo/SuggestedArticle";
import getDataSuapse from "../../utils/getDataSuapse";
import {useParams} from "react-router-dom";

export default function ArticleInfo() {
   const [articleData, fetchArticle] = getDataSuapse();
   const [articleInfo, setArticleInfo] = useState(null);
   const [article, setArticle] = useState(null);
   let {articleName} = useParams();

   useEffect(() => {
      fetchArticle("article");
      window.scrollTo(0, 0);
   }, [articleName]);

   useEffect(() => {
      let findArticle = articleData.find((item) => item.id == articleName);
      let filterArticle = articleData.filter((item) => item.id != articleName);
      setArticle(filterArticle);
      setArticleInfo(findArticle);
   }, [articleData]);

   return (
      <div className='min-h-screen bg-gray-200 dark:bg-gray-1000 '>
         <div className='container '>
            <div className='py-10'>
               <Breadcrumbs
                  arr={[
                     {title: "مقالات", id: 1, path: "/article"},
                     {title: articleInfo?.title, id: 2},
                  ]}
               />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-8 mb-20'>
               <div className='lg:col-span-3'>
                  <AboutArticle data={articleInfo} />
                  <SuggestedArticle data={article} />
               </div>
               <div className='md:col-span-1 '>
                  <RelatedArticle />
               </div>
            </div>
         </div>
      </div>
   );
}
