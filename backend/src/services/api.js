import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:5000/', // Remplacez cette URL par votre serveur backend
});

export default api;