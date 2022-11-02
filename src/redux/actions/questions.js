import axios from 'axios';
import { getGameQuestions, setGameQuestions } from '../reducers/videoGame';

const API = "https://gamescript-pf.herokuapp.com/";

export const getQuestions = (id) => {
	return async function (dispatch) {
		try {
			const { data } = await axios(API + `questions?gameId=` + id);
			dispatch(getGameQuestions(data));
		} catch (error) {
			dispatch(getGameQuestions([]))
		}
	};
};

export const postQuestion = (value) => {
	return async function (dispatch) {
		try {
			const { data } = await axios.post(API + `questions`, value);
			dispatch(setGameQuestions(data.question));
		} catch (error) {
			return;
		}
	};
};
