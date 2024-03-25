import React from "react";
import "./statsboxes.scss";

const Statsboxes = () => {
  return (
    <div className="wrapper_container_stats_boxes">
      <div className="wrapper_container_stats_boxes_1">
        <h2 className="wrapper_container_stats_boxes_1_number">11</h2>
        <p className="wrapper_container_stats_boxes_1_text">Courses completed</p>
      </div>
      <div className="wrapper_container_stats_boxes_2">
        <h2 className="wrapper_container_stats_boxes_2_number">4</h2>
        <p className="wrapper_container_stats_boxes_2_text">Courser in progress</p>
      </div>
    </div>
  )
}

export default Statsboxes;