import React from "react";
import "./navigation.scss";
import profilePictures from "../../media/image/profile_pictures.png";
import notificationsIcon from "../../media/icons/notifications_icon.png";

const Navigation = () => {
   return (
      <div className="wrapper_container_navigation">
         <div className="wrapper_container_navigation_search_bar">
            <input type="search" placeholder="Search..." />
         </div>
         <div className="wrapper_container_navigation_notifications">
            <img src={notificationsIcon} alt="notifications-icon" />
         </div>
      </div>
   )
}

export default Navigation;