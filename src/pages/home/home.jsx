import React from "react";
import "./home.scss";
import Header from "../../components/header/Header";
import Mycourse from "../../components/my-course/Mycourse";
import Navigation from "../../components/navigation/Navigation";
import Statsboxes from "../../components/stats-boxes/Statsboxes";

const Home = () => {
   return (
      <div className="wrapper_container_block_home_page_main">
         <div className="wrapper_container_block_home_page">
            <Header />
            <Mycourse />
            <h1>Home page</h1>
         </div>
         <div>
            <Navigation/>
            <Statsboxes/>
         </div>
      </div>     
   )
}

export default Home;