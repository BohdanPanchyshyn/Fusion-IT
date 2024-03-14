import React from "react";
import "./login.scss";
import avatar from "../../media/image/Illustrationmain_avatar.jpg";
import { NavLink } from "react-router-dom";


const Login = () => {
   return (
      <div className="wrapper_container_block_login">
         <div className="container__block_login">
            <h2 className="container__block_login_title">Login</h2>
            <input className="container__block_login_input" type="email" placeholder="Email" />
            <input className="container__block_login_input email" type="password" placeholder="Password" />
            <NavLink to="/">
               <button className="container__block_button">Шо ти пес?</button>
            </NavLink>
         </div>
         <div className="container__block_image">
            <img src={avatar} alt="Hello photo" className="container__block_image_avatar" />
            <h1 className="container__block_image_title" >Welcome to F.</h1>
         </div>
      </div>
   )
}

export default Login;