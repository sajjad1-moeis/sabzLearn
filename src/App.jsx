import React, {Suspense, useEffect} from "react";
import routes from "../routes/routes";
import {useRoutes} from "react-router-dom";
export default function App() {
   const router = useRoutes(routes);

   useEffect(() => {
      let theme = localStorage.getItem("theme");
      theme === "true" && document.body.classList.add("dark");
   }, []);

   return <Suspense>{router}</Suspense>;
}
