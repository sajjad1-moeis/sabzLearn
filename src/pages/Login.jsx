import React, {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import InputForm from "../components/common/InputForm";
import PageLoginOrrRegister from "../components/PageLoginOrrRegister";
import {Button} from "@material-tailwind/react";
export default function Login() {
   const [alertEror, setAlertEror] = useState("");
   const [alertSuccess, setAlertSuccess] = useState("");
   const [click, setIsClick] = useState(false);
   let navigate = useNavigate();

   const clickHandeler = async () => {};

   return (
      <>
         <PageLoginOrrRegister
            clickHandeler={clickHandeler}
            link='/register'
            title1='حساب کاربری ندارید؟'
            title2=' ثبت نام'
         >
            <InputForm />
            <Button onClick={clickHandeler} className='font-thin rounded-full bg-success text-lg w-full mt-5'>
               ادامه
            </Button>
            <p className='mt-5 text-left text-dark-light text-sm cursor-pointer'>حریم خصوصی</p>
         </PageLoginOrrRegister>
      </>
   );
}
