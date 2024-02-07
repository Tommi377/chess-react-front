import axios from 'axios';
import serverUrl from './serverUrl';

const baseUrl = serverUrl + '/api/users';


const signIn = (name, password) => axios.post(`${baseUrl}?action=create&name=${name}&password=${password}`);

const logIn = (name, password) => axios.post(`${baseUrl}?action=login&name=${name}&password=${password}`);

const logInGuest = () => axios.post(baseUrl + '?action=guest');

const logOut = () => axios.post(baseUrl + '?action=logout');


export {
    signIn,
    logIn,
    logInGuest,
    logOut
};