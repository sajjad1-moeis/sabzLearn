import React, {memo} from "react";

import InputForm from "../../../../Components/InputForm";
import useForm from "../../../../../Hooks/useForm";
let AddCourse = memo(function AddProduct() {
   const [states, inputHandeler] = useForm({
      name: {value: "", isValid: false},
      price: {value: "", isValid: false},
      category: {value: "", isValid: false},
      time: {value: "", isValid: false},
   });
   console.log(states);
   return (
      <>
         <h1 className='text-xl'>اضافه کردن محصول</h1>
         <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-8'>
            <InputForm isClick={true} isValid={states.name.isValid} inputHandeler={inputHandeler} id='name' />
            <InputForm isClick={true} isValid={states.category.isValid} inputHandeler={inputHandeler} id='category' />
            <InputForm isClick={true} isValid={states.price.isValid} inputHandeler={inputHandeler} id='price' />
            <InputForm isClick={true} isValid={states.time.isValid} inputHandeler={inputHandeler} id='time' />
         </div>
      </>
   );
});
export default AddCourse;
