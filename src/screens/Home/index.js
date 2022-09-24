import React, { useState, useEffect } from "react";
import { getBeers } from "../../service/api";

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


  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

export default Home;
