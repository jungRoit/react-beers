import React from 'react';
import Card from '../Card';
import Loader from '../Loader';

import "./style.css";

const CardContainer = ({ data, isLoading }) => {

  if (isLoading) {
    return (
      <div className="cards-container">
        <Loader />
      </div>
    )
  }

  return (
    <div className="cards-container">
      {data.map(beer => (
        <Card beer={beer} />
      ))}
    </div>
  )
}

export default CardContainer;
