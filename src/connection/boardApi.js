import axios from 'axios';
import serverUrl from './serverUrl';

const baseUrl = serverUrl + '/api/board';


const getTurn = () => axios.get(baseUrl + '?turnOnly=true');

const getBoard = () => axios.get(baseUrl + '?turnOnly=false');

const makeMove = (from, to) => axios.post(`${baseUrl}?command=${from}${to}`);

const surrender = () => axios.post(baseUrl + '?command=surrender');

const makePromotion = c => axios.post(`${baseUrl}?command=${c}`);


export {
    getTurn,
    getBoard,
    makeMove,
    surrender,
    makePromotion
};