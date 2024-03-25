import React from "react";
import "./sidebar.scss";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import homeIcon from "../../media/icons/home_icon.png";
import studyIcon from "../../media/icons/study_icon.png";
import userIcon from "../../media/icons/user_icon.png";
import chatIcon from "../../media/icons/email_icon.png";
import settingIcon from "../../media/icons/setting_icon.png";
import logoutIcon from "../../media/icons/logout_icon.png";
import ErrorPage from "../../pages/error/error";

const Sidebar = () => {
   return (
      <div className="wrapper_main_container_block_sidebar">
         <div className="main_container_block_sidebar">
            <div className="container__block_sidebar">
               <div className="container___block_sidebar_logo">
                  F.
               </div>
               <div className="container___block_sidebar_list">
                  <li className="container___block_sidebar_list_li">
                     <NavLink to="/" >
                        <img src={homeIcon} alt="Home-icon" />
                     </NavLink>
                  </li>
                  <li className="container___block_sidebar_list_li">
                     <NavLink to="/study" >
                        <img src={studyIcon} alt="Study-icon" />
                     </NavLink>
                  </li>
                  <li className="container___block_sidebar_list_li">
                     <NavLink to="/user" >
                        <img src={userIcon} alt="User-icon" />
                     </NavLink>
                  </li>
                  <li className="container___block_sidebar_list_li">
                     <NavLink to="/chat" >
                        <img src={chatIcon} alt="Chat-icon" />
                     </NavLink>
                  </li>
                  <li className="container___block_sidebar_list_li">
                     <NavLink to="/setting" >
                        <img src={settingIcon} alt="Setting-icon" />
                     </NavLink>
                  </li>
               </div>
               <div className="container___block_sidebar_logout">
                  <NavLink to="/login" >
                     <img src={logoutIcon} alt="Logout-icon" />
                  </NavLink>
               </div>
            </div>
         </div>
         <main>
            <Outlet>
            </Outlet>
         </main>
      </div>
   )
}

export default Sidebar;