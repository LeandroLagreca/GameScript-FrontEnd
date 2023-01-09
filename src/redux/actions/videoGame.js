import axios from "axios";

import {
  getAllGames,
  getGameById,
  getAllDiscounts,
  cleanFilter,
  getAllGenres,
  postAllGames,
  
} from "../reducers/videoGame";
const API = "https://gamescript-backend-production.up.railway.app/";
export const getGames = ({ name, rating, price, genre } = "", sort, page) => {
  const queries = `filter[name]=${name}&filter[rating]=${rating}&filter[price]=${price}&filter[genre]=${genre}&options[sort]=${sort}&options[page]=${page}`;
  return async function (dispatch) {
    try {
      const { data } = await axios(`https://gamescript-backend-production.up.railway.app/videogames?${queries}`);
      dispatch(
        getAllGames({
          games: data.games,
          totalResults: data.total,
        })
      );
    } catch (error) {
      dispatch(
        getAllGames({
          games: [],
          totalResults: 0,
        })
      );
    }
  };
};

export const getDetails = (id) =>
  async function (dispatch) {
    try {
      const request = await axios(API + `videogames/${id}`);
      dispatch(getGameById(request.data));
    } catch (error) {
      return;
    }
  };

export const getDiscounts = () => {
  return async function (dispatch) {
    try {
      const { data } = await axios(API + `discounts`);
      dispatch(getAllDiscounts(data));
    } catch (error) {
      return;
    }
  };
};

export const cleanToFilter = (clean) => {
  return function (dispatch) {
    try {
      dispatch(cleanFilter(clean));
    } catch (error) {
      
    }
  };
};



export const getGenres = () =>
  async function (dispatch) {
    try {
      const request = await axios(API + "genres");
      dispatch(getAllGenres(request.data));
    } catch (error) {
      return;
    }
  };

  export const postGames = (payload) =>
  async function (dispatch) {
    try {
      const response = await axios.post(API + "videogames", payload);
      dispatch(postAllGames(response));
    } catch (error) {
      return;
    }
  };  

  export const putGames = (input, id) =>
  async function () { 
    try {
      
    } catch (error) {
      return;
    }
  };  