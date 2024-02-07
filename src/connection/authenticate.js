import axios from 'axios';
import serverUrl from './serverUrl';

const authenticate = () => axios.get(serverUrl + '/authenticate');

export default authenticate;