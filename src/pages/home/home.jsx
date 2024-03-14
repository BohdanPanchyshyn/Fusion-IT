import React from "react";
import "./home.scss";
import Header from "../../components/header/Header";
import Mycourse from "../../components/my-course/Mycourse";

const Home = () => {
   return (
      <div className="wrapper_container_block_home_page">
         <Header />
         <Mycourse />
         <h1>Home page</h1>
      </div>
   )
}

export default Home;