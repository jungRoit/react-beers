import React, { useState, useEffect } from "react";

import { getBeers } from "../../service/api";

import './style.css';

const Home = (props) => {
  const [beers, setBeers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchBeers = async () => {

      try {
        const response = await getBeers();
        setBeers(response.data);
      } catch (err) {
        setBeers([]);
        setIsLoading(false);
      }
    }

    fetchBeers();
  }, [])

  console.log('beers', beers);


  return (
    <div className="container">
      <h1>Beers</h1>
      <div className="cards-container">
        {beers.map(beer => (
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
              <div className="card-description">
                {beer.description}
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Home;
