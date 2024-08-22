import React, {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";
import {Link} from "react-router-dom";
export default function Pagination({items, countPage, url, setItemsShow}) {
   const [countBtn, setCountBtn] = useState(0);
   const {search} = useLocation();

   let page = search.split("=")[0];

   useEffect(() => {
      let endIndex = countPage * page;
      let startIndex = endIndex - countPage;
      let slideArr = items.slice(startIndex, endIndex);

      setItemsShow(slideArr);

      setCountBtn(Math.ceil(items.length / countPage));

      window.scrollTo(0, 0);
   }, [page, items]);

   return (
      <div className='w-full mt-10 flex gap-3 justify-center'>
         {Array(countBtn)
            .fill(0)
            .map((item, index) => (
               <Link key={index} to={`${url}?page=${index + 1}`}>
                  <div
                     className={`w-10 h-10 rounded-xl flex items-center justify-center dark:text-white  ${
                        index + 1 == page ? "bg-success text-white" : "dark:bg-darker  bg-white"
                     }`}
                  >
                     {index + 1}
                  </div>
               </Link>
            ))}
      </div>
   );
}
