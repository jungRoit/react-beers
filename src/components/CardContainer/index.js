import React from 'react';
import Card from '../Card';

import "./style.css";

const CardContainer = ({ data }) => {
  return (
    <div className="cards-container">
      {data.map(beer => (
        <Card beer={beer} />
      ))}
    </div>
  )
}

export default CardContainer;
