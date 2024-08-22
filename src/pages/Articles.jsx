import React, {useEffect, useState} from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Pagination from "../components/common/Pagination";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import FilterBtnBox from "../components/common/FilterBtnBox/FilterBtnBox";
import SectionHeader from "../components/common/SectionHeader";
import ArticleBox from "../components/common/ArticleBox/ArticleBox";
import NotBoxImg from "../components/common/NotBoxImg";
import {IoSearchOutline} from "react-icons/io5";
import getDataSuapse from "../../utils/getDataSuapse";
import SkeletonCustom from "../components/common/Skeleton";

export default function Articles() {
   const [itemsShowPagination, setItemsPagination] = useState([]);
   const [articles, setArticles] = useState([]);
   const [articlesSlised, setArticlesSlised] = useState([]);

   let [articleData, fetchArticles] = getDataSuapse();

   useEffect(() => {
      fetchArticles("article");
   }, []);
   const [inputFilter, setInputFilter] = useState("");
   const navigate = useNavigate();

   const {search} = useLocation();

   useEffect(() => {
      setArticles(articleData);
      setArticlesSlised(articleData);
   }, [articleData]);

   const clickHander = (filter, id) => {
      if (["گران", "ارزان"].includes(filter)) {
         let sortArr = arr.sort((a, b) => a - b);
         if (filter === "ارزان") {
            setArticles(sortArr.slice(0, 5));
            setArticlesSlised(sortArr.slice(0, 5));
         } else {
            setArticles(sortArr.reverse().slice(0, 3));
            setArticlesSlised(sortArr.reverse().slice(0, 3));
         }
      } else if (filter === "مخاطب") {
         setArticles(arr.slice(0, 0));
         setArticlesSlised(arr.slice(0, 0));
      } else {
         setArticles(arr);
         setArticlesSlised(arr);
      }
      navigate(`/articles?page=1`);
      setInputFilter("");
   };

   const inputHandeler = (event) => {
      setInputFilter(event.target.value);
      if (event.target.value.length !== 0) {
         setArticles(articlesSlised.slice(event.target.value.length));
      } else {
         setArticles(articlesSlised);
      }
   };

   return (
      <div className='min-h-screen bg-gray-200 dark:bg-gray-1000 '>
         <div className='container py-20'>
            <SectionHeader title='وبلاگ' bg='bg-amber-500'>
               <div className='text-lg dark:text-gray-400 text-center'>219 مقاله</div>
            </SectionHeader>
            <div className=' grid grid-cols-1 md:grid-cols-4 gap-7 '>
               <div className='p-5 flex justify-between items-center rounded-xl dark:bg-darker bg-white h-max mt-6'>
                  <input
                     value={inputFilter}
                     onChange={inputHandeler}
                     type='text'
                     className='outline-none bg-transparent dark:text-white placeholder:text-blue-gray-500'
                     placeholder='جستجو بین مقالات'
                  />
                  <IoSearchOutline className='text-3xl dark:text-white' />
               </div>
               <div className='md:col-span-3'>
                  <FilterBtnBox clickHander={clickHander} />
                  {articles.length > 0 ? (
                     <div className='grid grid-cols-3 gap-5 mt-7'>
                        {articles.map((item) => (
                           <ArticleBox {...item} />
                        ))}
                     </div>
                  ) : (
                     <SkeletonCustom article />
                  )}
               </div>
            </div>
         </div>
      </div>
   );
}
