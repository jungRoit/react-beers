import React from "react";

import './style.css';

const Card = ({ beer }) => {

  return (
    <div className="card">
      <div className="card-image-section">
        <img src={beer.image_url} className="image" />
      </div>
      <div className="card-details-section">
        <div className="card-title">
          {beer.name}
        </div>
        <div className="card-subtitle">
          {beer.tagline}
        </div>
        <p className="card-description">
          {beer.description}
        </p>
      </div>
    </div>
  )
}

export default Card;
