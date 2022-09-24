import React from "react";
import ArrowDown from "../../assets/img/arrow-down.png";

import "./style.css";

const LoadMoreBtn = ({ onClick }) => (
  <div className="load-more" onClick={onClick}>
    <span>Load More</span>
    <img src={ArrowDown} className="load-more-icon" />
  </div>
)

export default LoadMoreBtn;
