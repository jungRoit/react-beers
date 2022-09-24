import axios from "axios";
import { GET_BEERS } from "../config/url";


export const getBeers = (limit, offset) => {
  const searchQuery = new URLSearchParams({
    per_page: limit || 10,
    page: offset || 1

  })
  return axios.get(`${GET_BEERS}${searchQuery ? '?' + searchQuery : ''}`);
}
