import React from "react";
import "./header.scss";
import avatar from "../../media/image/avatar.png"

const Header = () => {
   return (
      <div className="wrapper_header">
         <div className="wrapper_header_text-box">
            <h1>Hello Nikitos!</h1>
            <p>It's good to see you again.</p>
         </div>
         <div className="wrapper_header_image_box">
            <img className="wrapper_header_image_box_avatar" src={avatar} alt="Avatar-photo" />
         </div>
      </div>
   )
}

export default Header;