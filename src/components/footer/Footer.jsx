import React from "react";
import "./footer.scss";
import { NavLink } from "react-router-dom";

const Footer = () => {
   return (
      <div>
         <NavLink to="/" >Home page</NavLink>
         <NavLink to="/login">Login page</NavLink>
      </div>
   )
}

export default Footer;