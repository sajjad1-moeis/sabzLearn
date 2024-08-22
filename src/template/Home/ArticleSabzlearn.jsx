import React, {useEffect} from "react";
import ArticleBox from "../../components/common/ArticleBox/ArticleBox";
import SectionHeader from "../../components/common/SectionHeader";
import getDataSuapse from "../../../utils/getDataSuapse";
import SkeletonCustom from "../../components/common/Skeleton";
export default function ArticleSabzlearn() {
   let [articleData, fetchArticle] = getDataSuapse();

   useEffect(() => {
      fetchArticle("article");
   }, []);

   return (
      <div className='container mt-40 relative'>
         <div className='absolute w-[250px] z-0 opacity-25 h-[250px] blur-[125px] rounded-full bg-amber-400 -top-32 -right-40'></div>
         <div className='relative'>
            <SectionHeader
               path='/articles?page=1'
               isCustom
               titleBtn='مشاهده همه مقاله ها'
               title='وبلاگ آموزشی سبزلرن'
               desc='مقالات بروز برنامه نویسی'
               bg='bg-amber-400'
            />

            {articleData?.length > 0 ? (
               <div className='mt-5 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-7  '>
                  {articleData.map((item) => (
                     <ArticleBox {...item} />
                  ))}
               </div>
            ) : (
               <SkeletonCustom />
            )}
         </div>
      </div>
   );
}
