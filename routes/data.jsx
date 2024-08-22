import {IoFolderOpenOutline} from "react-icons/io5";
import {HiOutlineChatBubbleLeftRight, HiOutlineUser, HiOutlineHome} from "react-icons/hi2";
import {IoMdNotifications} from "react-icons/io";
import {GoHomeFill} from "react-icons/go";

import {HiUsers} from "react-icons/hi";
import {FaShop} from "react-icons/fa6";
import {IoBarChartSharp} from "react-icons/io5";
import {IoMdSettings} from "react-icons/io";
import {MdSms} from "react-icons/md";
import {IoLogOut} from "react-icons/io5";

let itemNav = [
   {link: "/category-info/frontend/1", title: "فرانت اند", arrMenu: ["s", "شبکه با گرایش امنیت	", "b"]},
   {link: "/category-info/security/1", title: "امنیت", arrMenu: ["s", "شبکه با گرایش امنیت	", "b"]},
   {link: "/category-info/python/1", title: "پایتون", arrMenu: ["s", "شبکه با گرایش امنیت	", "b"]},
   {link: "/category-info/php/1", title: "پی اچ پی", arrMenu: ["s", "شبکه با گرایش امنیت	", "b"]},
   {link: "/category-info/softskill/1", title: "ارتقای مهارت ها", arrMenu: ["s", "شبکه با گرایش امنیت	", "b"]},
   {link: "/articles/1", title: "مقالات", arrMenu: ["s", "شبکه با گرایش امنیت	", "b"]},
];

const itemUserDashboard = [
   {path: "/my-account", title: "پیشخوان", element: <HiOutlineHome />},
   {path: "/my-account/courses", title: "دوره های من", element: <IoFolderOpenOutline />},
   {path: "/my-account/ticket", title: "تیکت ها", element: <HiOutlineChatBubbleLeftRight />},
   {path: "/my-account/edit-account", title: " جزئیات حساب", element: <HiOutlineUser />},
];

const sidBarItemData = [
   {title: "خانه", href: "/p-admin", icon: <GoHomeFill />},
   {title: "کاربران", href: "/p-admin/users", icon: <HiUsers />},
   {title: "محصولات", href: "/p-admin/courses", icon: <FaShop />},
   {title: "پیام ها", href: "/p-admin/notification", icon: <IoMdNotifications />},
   {title: "تیکت ها", href: "/p-admin/ticket", icon: <MdSms />},
   {title: "آمار", href: "/p-admin/chart", icon: <IoBarChartSharp />},
   {title: "تنظیمات", href: "/p-admin/setting", icon: <IoMdSettings />},
   {title: "خروج", href: "/", icon: <IoLogOut />, isLogOut: true},
];

const TABLE_ROWS = [
   {name: "John Michael", job: "Manager", date: "23/04/18", value: 70, color: "blue"},
   {name: "Alexa Liras", job: "Developer", date: "23/04/18", value: 35, color: "green"},
   {name: "Laurent Perrier", job: "Executive", date: "19/09/17", value: 95, color: "red"},
   {name: "Michael Levi", job: "Developer", date: "24/12/08", value: 30, color: "pink"},
   {name: "Richard Gran", job: "Manager", date: "04/10/21", value: 69, color: "purple"},
];

export {itemNav, itemUserDashboard, sidBarItemData, TABLE_ROWS};
