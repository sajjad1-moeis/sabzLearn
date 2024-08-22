import React, {useEffect, useState} from "react";
import {Table} from "../../HomePanel/TableUsers/TableUsers";

const TABLE_HEAD = ["نام محصول", "دسته محصول", "قیمت محصول", "خرید و فروش", "عملیات"];

export default function TableProduct({arrBody, getAllProduct}) {
   return (
      <div className='mt-5 overflow-hidden'>
         <Table arrHead={TABLE_HEAD} arrBody={arrBody} isPoduct />
      </div>
   );
}
