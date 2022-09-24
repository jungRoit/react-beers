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
        setIsLoading(true);
        const response = await getBeers(ITEMS_PER_PAGE, offset);
        if (offset === 1) {
          setBeers(response.data);
        } else {
          setBeers([...beers, ...response.data]);
        }
        setIsLoading(false);
      } catch (err) {
        setBeers([]);
        setIsLoading(false);
      }
    }
    fetchBeers();
  }, [offset])

  const loadMoreBeers = () => {
    setOffset(offset + 1);
  }

  return (
    <div className="container">
      <div className="header">
      <h1>Beers</h1>
      </div>
      <CardContainer data={beers} isLoading={isLoading} />
      <div className="load-more-section">
        <LoadMoreBtn onClick={loadMoreBeers} />
      </div>
    </div>
  )
}

export default Home;
