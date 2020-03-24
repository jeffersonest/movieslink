import axios from 'axios';

const api = axios.create({
  //baseURL: 'https://movieslink-api.herokuapp.com/api/',
  baseURL: 'http://localhost:3001/api/'
  
});

export default api;