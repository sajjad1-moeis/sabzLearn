import {Menu, MenuHandler, MenuList, Button} from "@material-tailwind/react";
import {SlArrowDown} from "react-icons/sl";

export function MenuCustom(props) {
   return (
      <Menu allowHover={props.hover} offset={props.offset} placement={props.position}>
         {props.filterBlur && props.open && (
            <div
               onClick={() => props.setOpen(false)}
               className='fixed size-full backdrop-blur-xl z-[50] top-0 right-0 '
            />
         )}

         <MenuHandler>
            <button className='dark:text-white outline-none flex items-center gap-2 '>
               {props.title}
               {props.arrow && <SlArrowDown className='text-[10px]' />}
            </button>
         </MenuHandler>
         <MenuList className={props.className}>{props.children}</MenuList>
      </Menu>
   );
}
