import React from "react";
import { useRouteError } from "react-router-dom";
import "./error.scss";
import Footer from "../../components/footer/Footer";

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
   return (
      <>
         <h1>Opps!</h1>
         <p>{resultModName} page is not developed yet</p>
         <Footer />
      </>
   )
}

export default ErrorPage;