import React from "react";
import "./mycourse.scss";
import spanishIcon from "../../media/icons/spanish_icon.png";
import circleIcon from "../../media/icons/circle_icon.png";
import arrowLeft from "../../media/icons/arrow-left-icon.png";
import arrowRight from "../../media/icons/arrow-right-icon .png";

const Mycourse = () => {
   return (
      <div className="wrapper_my_course_box">
         <div className="wrapper_my_course_box_content">
            <div className="wrapper_my_course_box_content_label1">
               <div className="wrapper_my_course_box_content_label1_img">
                  <img src={spanishIcon} alt="icon-language" />
               </div>
               <div className="wrapper_my_course_box_content_label1_text">
                  <h3>Spanish B2</h3>
                  <p>by Alejandro Velazquez</p>
               </div>
            </div>
            <div className="wrapper_my_course_box_content_label2">
               <p className="wrapper_my_course_box_content_label2_text"> 83%
                  <img src={circleIcon} alt="circle-icon" className="wrapper_my_course_box_content_label2_img" />
               </p>
               <button className="wrapper_my_course_box_content_label2_button">Continue</button>
            </div>
         </div>
         <div className="wrapper_my_course_box_arrows">
            <img src={arrowLeft} alt="arrow-left" />
            <img src={arrowRight} alt="arrow-right" />
         </div>
      </div>
   )
}

export default Mycourse;