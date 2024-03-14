import React from "react";
import { useRouteError } from "react-router-dom";
import "./error.scss";
import Sidebar from "../../components/sidebar/Sidebar";

let resultModName;

const nameNonPage = (string) => {
   let nameid = string;
   let modName = nameid.replace('Error: No route matches URL "/', " ");
   resultModName = (modName.slice(0, - 1));
   return resultModName;
}


const ErrorPage = () => {
   const error = useRouteError();
   nameNonPage(error.data);
   console.log(error);
   return (
      <>
         <Sidebar />
         <div className="wrapper_container_error_page">
            <h1>Ooops!</h1>
            <p>{resultModName} page is not found...</p>
         </div>
      </>
   )
}

export default ErrorPage;