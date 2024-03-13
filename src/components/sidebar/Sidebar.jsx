import React from "react";
import "./sidebar.scss";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "../footer/Footer";

const Sidebar = () => {
   return (
      <>
         <div>Sidebar</div>
         <main>
            <Outlet></Outlet>
         </main>
         <Footer />
      </>
   )
}

export default Sidebar;