import React from "react";

export default function InputForm({
   disabled,
   value,
   isClick,
   icon,
   phone,
   placeholder,
   type,
   inputHandeler,
   id,
   min,
   email,
   max,
   isValid,
}) {
   let configInput = {
      min: min ? min : false,
      max: max ? max : false,
      phone: phone ? phone : false,
      email: email ? email : false,
   };
   return (
      <div
         className={`w-full mt-5 bg-gray-200 ${
            isClick && (isValid ? "border-success border" : "border-danger border")
         } dark:bg-dark-xs rounded-lg  flex justify-between items-center `}
      >
         <input
            disabled={disabled ? true : false}
            onInput={(event) => inputHandeler({value: event.target.value, id, ...configInput})}
            type={type}
            placeholder={placeholder}
            value={value}
            className='w-full p-4  placeholder:text-sm dark:placeholder:text-dark-light  bg-transparent  outline-none border-0'
         />
         <span className='dark:text-dark-light text-xl px-4'>{icon}</span>
      </div>
   );
}
