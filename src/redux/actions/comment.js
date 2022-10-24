import axios from "axios";
import {
    getGameComments
} from "../reducers/videoGame";

const API = 'https://gamescript.vercel.app';

export const getComments = (id) => {
    return async function (dispatch) {
      try {
        const { data } = await axios(API + `videogames/comments?gameID=` + id);
        dispatch(getGameComments(data));
        console.log(data)
      } catch (error) {
        return;
      }
    }
  };