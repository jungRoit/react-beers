import React from "react";
import ReactTooltip from 'react-tooltip';

import './style.css';

const Card = ({ beer }) => {

  const getIngredients = () => {
    let ingredients = `Ingredients:<br/>`;

    if (beer?.ingredients?.hops) {
      let hops = 'Hops: ';
      const hopsLength = beer?.ingredients?.hops?.length || 0;
      beer?.ingredients?.hops?.forEach((item, index) => {
        hops += `${item.name}${index < hopsLength - 1 && ', '}`
      })
      ingredients += hops;
    }

    if (beer?.ingredients?.malt) {
      let malts = '<br/>Malts: ';
      const maltsLength = beer.ingredients.malt.length || 0;
      beer.ingredients.malt.forEach((item, index) => {
        malts += `${item.name}${index < maltsLength - 1 && ', '}`
      })
      ingredients += malts;
    }

    ingredients += `<br/>Yeast: ${beer?.ingredients?.yeast}`;
    return ingredients;
  }

  return (
    <div className="card">
      <div className="card-image-section">
        <img src={beer.image_url} className="image" alt={beer.name} data-tip={getIngredients()} />
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
      <ReactTooltip multiline={true} effect="solid" />
    </div>
  )
}

export default Card;
