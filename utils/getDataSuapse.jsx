import React, {useState} from "react";
import {createClient} from "@supabase/supabase-js";
const supabase = createClient(
   "https://uzklefihkajdqxvztxas.supabase.co",
   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV6a2xlZmloa2FqZHF4dnp0eGFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM5MDkyODMsImV4cCI6MjAzOTQ4NTI4M30.PjnUotcswjBsAcr7VewNElYdMGdnpub_ihx0WoO_GhA"
);

export default function getDataSuapse() {
   const [datas, setData] = useState([]);
   const fetchData = async (url) => {
      const {data, error} = await supabase.from(`${url}`).select();
      data && setData(data);
   };
   return [datas, fetchData];
}
