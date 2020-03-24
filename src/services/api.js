import axios from 'axios';

const api = axios.create({
  baseURL: 'https://movieslink-api.herokuapp.com/api/',
});

export default api;