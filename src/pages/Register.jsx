import React, {useEffect, useState} from "react";
import {IoLockClosedOutline} from "react-icons/io5";
import {FiPhone} from "react-icons/fi";
import {HiOutlineUser} from "react-icons/hi2";
import {MdOutlineEmail} from "react-icons/md";
import InputForm from "../components/common/InputForm";
import PageLoginOrrRegister from "../components/PageLoginOrrRegister";
import {Button, Input} from "@material-tailwind/react";

export default function Register() {
   const [click, setIsClick] = useState(false);
   let inputHandeler = () => {};
   let clickHandeler = () => {};

   let itemInput = [
      {
         id: "name",
         placeholder: "نام کاربری",
         type: "text",
         icon: <HiOutlineUser />,
      },
      {
         id: "phone",
         phone: true,
         min: 11,
         placeholder: "شماره موبایل",
         type: "text",
         icon: <FiPhone />,
      },
      {
         id: "email",
         email: true,
         placeholder: "آدرس ایمیل",
         type: "text",
         icon: <MdOutlineEmail />,
      },
      {
         id: "pass",
         min: 8,
         inputHandeler,
         placeholder: "رمز عبور",
         type: "password",
         icon: <IoLockClosedOutline />,
      },
   ];

   return (
      <PageLoginOrrRegister
         clickHandeler={clickHandeler}
         title1='قبلا ثبت نام کرده اید ؟'
         title2='وارد شوید'
         link='/login'
      >
         {itemInput.map((item) => (
            <InputForm key={item.id} isClick={click} {...item} />
         ))}
         <Button onClick={clickHandeler} className='font-thin rounded-full  bg-success text-lg w-full mt-5'>
            ادامه
         </Button>
      </PageLoginOrrRegister>
   );
}
