// import Home from "../src/Pages/Home/Home";
// import CurseInfo from "../src/Pages/Curse-Info/CurseInfo";
// import Categorys from "../src/Pages/Categorys/Categorys";
// import Login from "../src/Pages/Login/Login";
// import Register from "../src/Pages/Register/Register";
// import {ArticleInfo} from "../src/Pages/ArticleInfo/ArticleInfo";
// import Courses from "../src/Pages/Courses/Courses";
// import Articles from "../src/Pages/Articles/Articles";
// import SearchCourse from "../src/SectionPages/Courses/SearchCourse";
// import NotFound from "../src/SectionPages/NotFound/NotFound";

// import MyAccount from "../src/Pages/MyAccount/MyAccount";
// import HomeMyAccount from "../src/SectionPages/MyAccount/HomeMyAccount";
// import CoursesMyAccount from "../src/SectionPages/MyAccount/CoursesMyAccount";
// import TicketMyAccount from "../src/SectionPages/MyAccount/TicketMyAccount";
// import EditMyAccount from "../src/SectionPages/MyAccount/EditMyAccount";
// import AddTicket from "../src/SectionPages/MyAccount/AddTicket";

// import PAdmin from "../src/Pages/PAdmin/PAdmin";
// import HomePanel from "../src/SectionPages/PAdmin/HomePanel/HomePanel";
// import CoursesPanel from "../src/SectionPages/PAdmin/ProductPanel/CoursesPanel";
// let routes = [
//    {path: "/", element: <Home />},
//    {path: "/courses/:page", element: <Courses />},
//    {path: "/course/:search/:page", element: <SearchCourse />},
//    {path: "/category-info/:categoryName/:page", element: <Categorys />},
//    {path: "/article-info/:articleName", element: <ArticleInfo />},

//    {
//       path: "/p-admin/",
//       element: <PAdmin />,
//       children: [
//          {path: "", element: <HomePanel />},
//          {path: "users", element: <CoursesMyAccount />},
//          {path: "courses", element: <CoursesPanel />},
//          {path: "notification", element: <CoursesMyAccount />},
//          {path: "chart", element: <CoursesMyAccount />},
//          {path: "ticket", element: <TicketMyAccount />},
//          {path: "edit-account", element: <EditMyAccount />},
//          {path: "setting", element: <CoursesMyAccount />},
//       ],
//    },
// ];
import {lazy} from "react";
import LayoutRoute from "../utils/LayoutRoute";

const Home = lazy(() => import("../src/pages/Home"));

const CurseInfo = lazy(() => import("../src/pages/CurseInfo"));
const NotFound = lazy(() => import("../src/template/NotFound/NotFound"));
const Articles = lazy(() => import("../src/pages/Articles"));
const ArticleInfo = lazy(() => import("../src/pages/ArticleInfo"));
const Login = lazy(() => import("../src/pages/Login"));
const Register = lazy(() => import("../src/pages/Register"));

const MyAccount = lazy(() => import("../src/pages/MyAccount"));
const HomeMyAccount = lazy(() => import("../src/template/MyAccount/HomeMyAccount"));
const AddTicket = lazy(() => import("../src/template/MyAccount/AddTicket"));
const CoursesMyAccount = lazy(() => import("../src/template/MyAccount/CoursesMyAccount"));
const TicketMyAccount = lazy(() => import("../src/template/MyAccount/TicketMyAccount"));
const EditMyAccount = lazy(() => import("../src/template/MyAccount/EditMyAccount"));

let routes = [
   {path: "/", element: <LayoutRoute element={<Home />} />},
   {path: "/course/:curseName", element: <LayoutRoute element={<CurseInfo />} />},
   {path: "/articles", element: <LayoutRoute element={<Articles />} />},
   {path: "/article/:articleName", element: <LayoutRoute element={<ArticleInfo />} />},

   {
      path: "/my-account/",
      element: <MyAccount />,
      children: [
         {path: "", element: <HomeMyAccount />},
         {path: "add-ticket", element: <AddTicket />},
         {path: "courses", element: <CoursesMyAccount />},
         {path: "ticket", element: <TicketMyAccount />},
         {path: "edit-account", element: <EditMyAccount />},
      ],
   },
   {path: "/login", element: <Login />},
   {path: "/register", element: <Register />},

   {path: "*", element: <NotFound />},
];

export default routes;
