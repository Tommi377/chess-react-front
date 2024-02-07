import axios from 'axios';
import serverUrl from './serverUrl';

const baseUrl = serverUrl + '/api/games';


const getOnGoingGames = () => axios.get(baseUrl);

const createGame = (type, color) => axios.post(`${baseUrl}?type=${type}&color=${color}`);

const joinGame = id => axios.put(`${baseUrl}?game=${id}`);


export {
    getOnGoingGames,
    createGame,
    joinGame
};