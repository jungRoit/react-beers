import React, { useState, useEffect } from "react";
import CardContainer from "../../components/CardContainer";

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
      <CardContainer data={beers} />
    </div>
  )
}

export default Home;
