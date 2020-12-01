import axios from 'axios';

const api = axios.create({
    baseURL: 'http://189.84.249.99:3333'
});
export default api;