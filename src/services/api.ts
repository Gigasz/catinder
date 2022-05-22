import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.thecatapi.com/v1',
  timeout: 30000,
  headers: {
    'x-api-key': 'd8a19905-558e-4c9c-a845-6764b588de05'
  }
})

export default api;
