import React, { useState, useEffect } from "react";

import { getBeers } from "../../service/api";
import LoadMoreBtn from "../../components/LoadMoreBtn";
import { ITEMS_PER_PAGE } from "../../config/constants";
import CardContainer from "../../components/CardContainer";

import './style.css';

const Home = () => {
  const [beers, setBeers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(1);

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const response = await getBeers(ITEMS_PER_PAGE, offset);
        setBeers(response.data);
      } catch (err) {
        setBeers([]);
        setIsLoading(false);
      }
    }
    fetchBeers();
  }, [])

  const loadMoreBeers = async () => {
    try {
      const response = await getBeers(ITEMS_PER_PAGE, offset + 1);
      setBeers([...beers, ...response.data]);
      setOffset(offset + 1)
    } catch (err) {
    }
  }

  console.log('beers', beers);

  return (
    <div className="container">
      <h1>Beers</h1>
      <CardContainer data={beers} isLoading={isLoading} />
      <div className="load-more-section">
        <LoadMoreBtn onClick={loadMoreBeers} />
      </div>
    </div>
  )
}

export default Home;
