import React, { useState, useEffect } from "react";

import { getBeers } from "../../service/api";
import CardContainer from "../../components/CardContainer";

import './style.css';
import LoadMoreBtn from "../../components/LoadMoreBtn";

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
      <CardContainer data={beers} isLoading={isLoading} />
      <div className="load-more-section">
        <LoadMoreBtn onClick={() => { console.log('clicked') }} />
      </div>
    </div>
  )
}

export default Home;
